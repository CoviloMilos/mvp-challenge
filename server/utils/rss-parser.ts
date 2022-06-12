import Parser from "rss-parser";
const parser = new Parser();

export const parseURL = (source: string) => parser.parseURL(source);
