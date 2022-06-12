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
exports.startFeedPolling = void 0;
const config_1 = require("../../config");
const cache_1 = require("../cache");
const utils_1 = require("../utils");
const feed_resolver_service_1 = require("./feed-resolver.service");
const sourceCache = cache_1.SourceCache.getInstance();
const fetchData = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(`${new Date().toISOString()}: Polling rss feeds ...`);
        const sources = sourceCache.getSources();
        const rssParsers = sources.map((source) => (0, utils_1.parseURL)(source));
        const response = yield Promise.allSettled(rssParsers);
        const feeds = (0, utils_1.mapFulfilledPromises)(response);
        console.log(feeds.length);
        yield (0, feed_resolver_service_1.resolveFeeds)(feeds);
    }
    catch (error) {
        console.log(error);
    }
});
const startFeedPolling = () => {
    setInterval(fetchData, Number(config_1.POOLING_INTERVAL));
};
exports.startFeedPolling = startFeedPolling;
//# sourceMappingURL=feed-poller.service.js.map