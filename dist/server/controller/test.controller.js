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
exports.getTest = void 0;
const cache_1 = require("../cache");
const feedCache = cache_1.FeedCache.getInstance();
const sourceCache = cache_1.SourceCache.getInstance();
const getTest = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        sourceCache.setValue("cryptopotato", "https://cryptopotato.com/feed");
        const data = Object.assign({}, feedCache.getData());
        // feedCache.clear();
        return res.status(200).json(data);
    }
    catch (err) {
        next(err);
    }
});
exports.getTest = getTest;
//# sourceMappingURL=test.controller.js.map