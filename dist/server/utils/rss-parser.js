"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseURL = void 0;
const rss_parser_1 = __importDefault(require("rss-parser"));
const parser = new rss_parser_1.default();
const parseURL = (source) => parser.parseURL(source);
exports.parseURL = parseURL;
//# sourceMappingURL=rss-parser.js.map