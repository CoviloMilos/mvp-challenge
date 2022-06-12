import { Item } from "rss-parser";
import { CacheBase } from "./cache";

export class FeedCache extends CacheBase<Item> {
  private static _instance: FeedCache = new FeedCache();

  private constructor() {
    super();
  }

  public static getInstance(): FeedCache {
    return FeedCache._instance;
  }
}
