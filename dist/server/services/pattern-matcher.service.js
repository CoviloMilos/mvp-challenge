"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.matchPatterns = exports.applyPattern = exports.isItemMatch = void 0;
const cache_1 = require("../cache");
const utils_1 = require("../utils");
const app_1 = require("../../app");
const patternCache = cache_1.PatternCache.getInstance();
const isItemMatch = (item, pattern) => {
    const content = (0, utils_1.flattenContent)(item);
    return !!content.match(new RegExp(pattern, "i"));
};
exports.isItemMatch = isItemMatch;
const applyPatterns = (item) => {
    const patterns = patternCache.getPatterns();
    const matchedPatterns = [];
    for (const pattern of patterns) {
        (0, exports.isItemMatch)(item, pattern.regex) && matchedPatterns.push(pattern.name);
    }
    return matchedPatterns;
};
const applyPattern = (item, pattern) => {
    if ((0, exports.isItemMatch)(item, pattern.regex)) {
        (0, utils_1.stdoutItem)(pattern.name, item);
    }
};
exports.applyPattern = applyPattern;
const matchPatterns = (item) => {
    const itemCategories = applyPatterns(item);
    if (itemCategories.length > 0) {
        app_1.liveItemStream.emit("feed", item);
    }
    for (const category of itemCategories) {
        (0, utils_1.stdoutItem)(category, item);
    }
};
exports.matchPatterns = matchPatterns;
//# sourceMappingURL=pattern-matcher.service.js.map