"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeedCache = void 0;
const cache_1 = require("./cache");
class FeedCache extends cache_1.CacheBase {
    constructor() {
        super();
    }
    static getInstance() {
        return FeedCache._instance;
    }
}
exports.FeedCache = FeedCache;
FeedCache._instance = new FeedCache();
//# sourceMappingURL=feed-cache.js.map