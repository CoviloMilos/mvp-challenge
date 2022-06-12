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
exports.resolveFeeds = void 0;
const cache_1 = require("../cache");
const utils_1 = require("../utils");
const pattern_matcher_service_1 = require("./pattern-matcher.service");
const scrapper_service_1 = require("./scrapper.service");
const feedCache = cache_1.FeedCache.getInstance();
const saveFeedItem = (item) => {
    feedCache.setValue(item.guid, item);
};
const incompleteItem = (item) => !item.content;
const resolveFeeds = (feeds) => __awaiter(void 0, void 0, void 0, function* () {
    const items = (0, utils_1.flattenItems)(feeds);
    // Feeds that don't have content tag needed for matching pattern
    const incompleteItems = [];
    for (const item of items) {
        if (!feedCache.exist(item.guid)) {
            if (incompleteItem(item))
                incompleteItems.push(item);
            else {
                saveFeedItem(item);
                (0, pattern_matcher_service_1.matchPatterns)(item);
            }
        }
    }
    if (incompleteItems.length > 0) {
        yield (0, scrapper_service_1.extractItemsFromWebpage)(incompleteItems.map((item) => item.link));
    }
});
exports.resolveFeeds = resolveFeeds;
//# sourceMappingURL=feed-resolver.service.js.map