import { Item } from "rss-parser";
import { PatternCache } from "../cache";
import { flattenContent, stdoutItem } from "../utils";
import { liveItemStream } from "../../app";
import { Pattern } from "../models";
const patternCache = PatternCache.getInstance();

export const isItemMatch = (item: Item, pattern: string) => {
  const content = flattenContent(item);
  return !!content.match(new RegExp(pattern, "i"));
};

const applyPatterns = (item: Item): string[] => {
  const patterns = patternCache.getPatterns();
  const matchedPatterns: string[] = [];
  for (const pattern of patterns) {
    isItemMatch(item, pattern.regex) && matchedPatterns.push(pattern.name);
  }

  return matchedPatterns;
};

export const applyPattern = (item: Item, pattern: Pattern) => {
  if (isItemMatch(item, pattern.regex)) {
    stdoutItem(pattern.name, item);
  }
};

export const matchPatterns = (item: Item) => {
  const itemCategories = applyPatterns(item);

  if (itemCategories.length > 0) {
    liveItemStream.emit("feed", item);
  }

  for (const category of itemCategories) {
    stdoutItem(category, item);
  }
};
