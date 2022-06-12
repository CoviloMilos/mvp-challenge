"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.liveItemStream = void 0;
const config_1 = require("./config");
const server_1 = require("./server");
const seed_1 = __importDefault(require("./seed"));
const socketio = require("socket.io");
const server = config_1.expressApp.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));
(0, seed_1.default)();
exports.liveItemStream = socketio(server);
exports.liveItemStream.on("connection", (socket) => {
    console.log("front-end connected");
    let regex = "";
    socket.on("request-feed", (data) => {
        console.log(data);
        regex = data;
        startEmiting(regex);
    });
    const startEmiting = (data) => {
        socket.emit("feed", regex);
        console.log("emited");
    };
    const stopEmmiting = () => {
        socket.stopEmmiting("send-feed");
    };
});
(0, server_1.startFeedPolling)();
//# sourceMappingURL=app.js.map