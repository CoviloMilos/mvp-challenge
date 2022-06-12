"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const feed_item_route_1 = __importDefault(require("./feed-item.route"));
const pattern_route_1 = __importDefault(require("./pattern.route"));
const source_route_1 = __importDefault(require("./source.route"));
const router = (0, express_1.Router)();
router.use(source_route_1.default);
router.use(pattern_route_1.default);
router.use(feed_item_route_1.default);
exports.default = router;
//# sourceMappingURL=index.js.map