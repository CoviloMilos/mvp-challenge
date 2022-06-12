"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatternCache = void 0;
const cache_1 = require("./cache");
class PatternCache extends cache_1.CacheBase {
    constructor() {
        super();
    }
    static getInstance() {
        return PatternCache._instance;
    }
    getPatterns() {
        return Object.values(this.data);
    }
}
exports.PatternCache = PatternCache;
PatternCache._instance = new PatternCache();
//# sourceMappingURL=pattern.cache.js.map