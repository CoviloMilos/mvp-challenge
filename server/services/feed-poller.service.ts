import { POOLING_INTERVAL } from "../../config";
import logger from "../../config/logger.config";
import { SourceCache } from "../cache";
import { mapFulfilledPromises, parseURL } from "../utils";
import { resolveFeeds } from "./feed-resolver.service";

const sourceCache = SourceCache.getInstance();

const fetchData = async () => {
  try {
    logger.info(
      `Polling rss feeds from ${sourceCache
        .getValues()
        .map((source) => source.name)}`
    );
    const sources = sourceCache.getSources();
    const rssParsers = sources.map((source) => parseURL(source));
    const response = await Promise.allSettled(rssParsers);
    const feeds = mapFulfilledPromises(response);

    await resolveFeeds(feeds);
  } catch (error) {
    logger.error(error);
  }
};

export const startFeedPolling = () => {
  setInterval(fetchData, Number(POOLING_INTERVAL));
};
