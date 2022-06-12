import { Item, Output } from "rss-parser";
import { FeedCache } from "../cache";
import { flattenItems } from "../utils";
import { matchPatterns } from "./pattern-matcher.service";
import { extractItemFromWebpage } from "./scrapper.service";

const feedCache = FeedCache.getInstance();

const saveFeedItem = (item: Item) => {
  feedCache.setValue(item.guid!, item);
};

const incompleteItem = (item: Item) => !item.content;

export const resolveFeeds = async (feeds: Output<any>[]) => {
  const items: Item[] = flattenItems(feeds);

  // Feeds that don't have content tag needed for matching pattern
  const incompleteItems: Item[] = [];

  for (const item of items) {
    if (!feedCache.exist(item.guid!)) {
      if (incompleteItem(item)) incompleteItems.push(item);
      else {
        saveFeedItem(item);
        matchPatterns(item);
      }
    }
  }

  if (incompleteItems.length > 0) {
    await extractItemFromWebpage(incompleteItems.map((item) => item.link!));
  }
};
