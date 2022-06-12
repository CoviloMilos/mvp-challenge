"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.genereteFeedID = void 0;
const query_string_1 = __importDefault(require("query-string"));
const genereteFeedID = (feedUrl) => {
    const pParam = query_string_1.default.parse(feedUrl.replace(/^.*\?/, ""));
    return pParam.p.toString();
};
exports.genereteFeedID = genereteFeedID;
//# sourceMappingURL=helper.js.map