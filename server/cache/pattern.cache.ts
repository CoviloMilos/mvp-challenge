import { Pattern } from "../models";
import { CacheBase } from "./cache";

export class PatternCache extends CacheBase<Pattern> {
  private static _instance: PatternCache = new PatternCache();

  private constructor() {
    super();
  }

  public static getInstance(): PatternCache {
    return PatternCache._instance;
  }

  public getPatterns(): Pattern[] {
    return Object.values(this.data);
  }
}
