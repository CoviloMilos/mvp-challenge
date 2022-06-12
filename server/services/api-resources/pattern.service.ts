import { Item } from "rss-parser";
import { errors } from "../../../config";
import { FeedCache, PatternCache } from "../../cache";
import { Pattern } from "../../models";
import { applyPattern } from "../pattern-matcher.service";

const patternCache = PatternCache.getInstance();
const feedCache = FeedCache.getInstance();

const createPattern = (pattern: Pattern) => {
  patternCache.setValue(pattern.name, pattern);

  // Apply pattern to existing RSS items
  const items: Item[] = feedCache.getValues();

  for (const item of items) {
    applyPattern(item, pattern);
  }

  return pattern;
};

const listPatterns = () => patternCache.getData();

const deletePattern = async (name: string): Promise<Pattern> => {
  const pattern = patternCache.delete(name);
  if (!pattern) return Promise.reject(errors.resourceNotFound("Pattern"));
  return pattern;
};

export { createPattern, listPatterns, deletePattern };
