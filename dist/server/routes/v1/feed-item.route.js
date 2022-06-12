"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const feed_item_controller_1 = __importDefault(require("../../controller/feed-item.controller"));
const middlewares_1 = require("../../middlewares");
const feedItemRouter = (0, express_1.Router)();
feedItemRouter.get("/feed-items", middlewares_1.validateQueryPattern, feed_item_controller_1.default.findFeedItemsByPattern);
exports.default = feedItemRouter;
//# sourceMappingURL=feed-item.route.js.map