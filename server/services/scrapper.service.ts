import cheerio from "cheerio";
import axios from "axios";
import { mapFulfilledPromises } from "../utils";
import logger from "../../config/logger.config";

export const extractItemFromWebpage = async (urls: string[]) => {
  try {
    const requests = urls.map((url) => axios.get(url));

    const responses = await Promise.allSettled(requests);

    const res = mapFulfilledPromises(responses);

    const contents = res.map(({ data }) => getContent(data));

    logger.info(contents);
  } catch (error) {
    logger.error(error);
  }
};

const getContent = (body: string) => {
  const $: any = cheerio.load(body);
  const news = $("body");
  return news.find("p").text();
};
