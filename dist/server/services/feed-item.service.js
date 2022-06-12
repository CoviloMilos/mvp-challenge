"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findFeedItemsByPattern = void 0;
const cache_1 = require("../cache");
const pattern_matcher_service_1 = require("./pattern-matcher.service");
const feedCache = cache_1.FeedCache.getInstance();
const findFeedItemsByPattern = (pattern) => feedCache.getValues().filter((item) => (0, pattern_matcher_service_1.isItemMatch)(item, pattern));
exports.findFeedItemsByPattern = findFeedItemsByPattern;
//# sourceMappingURL=feed-item.service.js.map