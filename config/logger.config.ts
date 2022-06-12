import * as winston from "winston";

const levels = {
  error: 0,
  info: 1,
};

const colors = {
  error: "red",
  info: "green",
};

winston.addColors(colors);

const winstonFormat = winston.format.combine(
  winston.format.colorize({
    all: true,
  }),
  winston.format.label({
    label: "[LOGGER]",
  }),
  winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss:ms" }),
  winston.format.align(),
  winston.format.printf(
    (info) => `${info.timestamp} ${info.level}: ${info.message}`
  )
);

const logger = winston.createLogger({
  format: winstonFormat,
  transports: [new winston.transports.Console()],
});

export default logger;
