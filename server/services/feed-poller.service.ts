import { PULL_INTERVAL } from "../../config";
import logger from "../../config/logger.config";
import { SourceCache } from "../cache";
import { mapFulfilledValues, parseURL } from "../utils";
import { resolveFeeds } from "./feed-resolver.service";

const sourceCache = SourceCache.getInstance();

const fetchData = async () => {
  try {
    const sources = sourceCache.getSources();

    logger.info(`Pull rss feeds from sources: ${sources.join(" | ")}`);

    const rssParsers = sources.map((source) => parseURL(source));
    const response = await Promise.allSettled(rssParsers);
    const feeds = mapFulfilledValues(response);

    await resolveFeeds(feeds);
  } catch (error) {
    logger.error(error);
  }
};

export const startFeedPull = () => {
  setInterval(fetchData, Number(PULL_INTERVAL));
};
