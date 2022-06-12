import dotenv from "dotenv";

if (process.env.NODE_ENV) {
  dotenv.config({
    path: `./.env.${process.env.NODE_ENV}`,
  });
  console.info(`Starting ENV: ${process.env.NODE_ENV}`);
} else {
  throw new Error("NODE_ENV must be defined");
}

export * from "./express.config";
export * from "./api-error.constants";

export const PULL_INTERVAL = process.env.PULL_INTERVAL;
export const STDOUT = process.env.STDOUT;
