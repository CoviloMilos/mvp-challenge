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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.extractItemsFromWebpage = void 0;
const cheerio_1 = __importDefault(require("cheerio"));
const axios_1 = __importDefault(require("axios"));
const utils_1 = require("../utils");
const extractItemsFromWebpage = (urls) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const requests = urls.map((url) => axios_1.default.get(url));
        const responses = yield Promise.allSettled(requests);
        const res = (0, utils_1.mapFulfilledPromises)(responses);
        const contents = res.map(({ data }) => getContent(data));
        console.log(contents);
    }
    catch (error) {
        console.log(error);
    }
});
exports.extractItemsFromWebpage = extractItemsFromWebpage;
const getContent = (body) => {
    const $ = cheerio_1.default.load(body);
    const news = $("body");
    return news.find("p").text();
};
//# sourceMappingURL=scrapper.service.js.map