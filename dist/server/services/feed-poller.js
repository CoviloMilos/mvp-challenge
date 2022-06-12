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
const sourceCache = cache_1.SourceCache.getInstance();
const model = {
    name: "blockworks",
    url: "https://blockworks.co/feed/",
};
sourceCache.setValue(model.name, model);
const getFeeds = (parserResolvers) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield Promise.allSettled(parserResolvers);
        const feeds = response.map(utils_1.mapFulfilledPromises);
        console.log(feeds);
    }
    catch (error) {
        console.log(error);
    }
});
const fetchData = () => __awaiter(void 0, void 0, void 0, function* () {
    const sources = sourceCache.getSources();
    const parserResolvers = sources.map((source) => (0, utils_1.parseURL)(source));
    yield getFeeds(parserResolvers);
});
const startFeedPolling = () => {
    setInterval(fetchData, Number(config_1.POOLING_INTERVAL));
};
exports.startFeedPolling = startFeedPolling;
//# sourceMappingURL=feed-poller.js.map