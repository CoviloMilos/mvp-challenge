import { Item } from "rss-parser";
import { FeedCache } from "../../cache";
import { isItemMatch } from "../pattern-matcher.service";

const feedCache = FeedCache.getInstance();

const findFeedItemsByPattern = (pattern: string): Item[] => feedCache.getValues().filter((item) => isItemMatch(item, pattern));

export { findFeedItemsByPattern };
