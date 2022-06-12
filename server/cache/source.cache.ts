import { Source } from "../models";
import { CacheBase } from "./cache";

export class SourceCache extends CacheBase<Source> {
  private static _instance: SourceCache = new SourceCache();

  private constructor() {
    super();
  }

  public static getInstance(): SourceCache {
    return SourceCache._instance;
  }

  public getSources(): string[] {
    return Object.values(this.data).map((source) => source.url);
  }
}
