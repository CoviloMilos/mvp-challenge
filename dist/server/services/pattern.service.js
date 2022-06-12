"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePattern = exports.listPatterns = exports.createPattern = void 0;
const config_1 = require("../../config");
const cache_1 = require("../cache");
const pattern_matcher_service_1 = require("./pattern-matcher.service");
const patternCache = cache_1.PatternCache.getInstance();
const feedCache = cache_1.FeedCache.getInstance();
const createPattern = (pattern) => {
    patternCache.setValue(pattern.name, pattern);
    // Apply pattern to existing RSS items
    const items = feedCache.getValues();
    for (const item of items) {
        (0, pattern_matcher_service_1.applyPattern)(item, pattern);
    }
    return pattern;
};
exports.createPattern = createPattern;
const listPatterns = () => patternCache.getData();
exports.listPatterns = listPatterns;
const deletePattern = (name) => __awaiter(void 0, void 0, void 0, function* () {
    const pattern = patternCache.delete(name);
    if (!pattern)
        return Promise.reject(config_1.errors.resourceNotFound("Pattern"));
    return pattern;
});
exports.deletePattern = deletePattern;
//# sourceMappingURL=pattern.service.js.map