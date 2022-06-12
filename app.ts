import { expressApp } from "./config";
import { startFeedPull } from "./server";
import startupConfig from "./seed";
import logger from "./config/logger.config";
const socketio = require("socket.io");

const server = expressApp.listen(process.env.PORT, () => logger.info(`Server running on port ${process.env.PORT}`));

startupConfig();

export const liveItemStream = socketio(server);
liveItemStream.on("connection", (socket: any) => {
  logger.info(`Connected clients count: ${liveItemStream.engine.clientsCount}`);
});

startFeedPull();
