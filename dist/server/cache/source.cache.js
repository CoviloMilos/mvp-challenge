"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SourceCache = void 0;
const cache_1 = require("./cache");
class SourceCache extends cache_1.CacheBase {
    constructor() {
        super();
    }
    static getInstance() {
        return SourceCache._instance;
    }
    getSources() {
        return Object.values(this.data).map((source) => source.url);
    }
}
exports.SourceCache = SourceCache;
SourceCache._instance = new SourceCache();
//# sourceMappingURL=source.cache.js.map