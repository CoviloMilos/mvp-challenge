import { Item, Output } from "rss-parser";
import { PATTERN_MATCH_PROPERTIES } from "./consts";

export const flattenItems = (feeds: Output<any>[]) =>
  feeds.map((feed) => feed.items).flat();

export const flattenContent = (item: Item): string => {
  let content = "";
  for (const [key, value] of Object.entries(item)) {
    if (PATTERN_MATCH_PROPERTIES.includes(key)) {
      content += value + " ";
    }
  }

  return content;
};

export const stdout = (item: Item) => {
  const date = new Date().toISOString();
  const output = [
    "\n------------------------",
    `${date}: ${item.title}`,
    `Creator: ${item.creator}`,
    `Link: ${item.link}`,
    `Categories: ${item.categories}`,
    `Content: ${item.content}`,
  ];

  return output.join("\n");
};
