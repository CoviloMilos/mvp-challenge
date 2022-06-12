"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.STDOUT = exports.POOLING_INTERVAL = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
if (process.env.NODE_ENV) {
    dotenv_1.default.config({
        path: `./.env.${process.env.NODE_ENV}`,
    });
    console.info(`Starting ENV: ${process.env.NODE_ENV}`);
}
else {
    throw new Error("NODE_ENV must be defined");
}
__exportStar(require("./express.config"), exports);
__exportStar(require("./api-error.constants"), exports);
exports.POOLING_INTERVAL = process.env.POOLING_INTERVAL;
exports.STDOUT = process.env.STDOUT;
//# sourceMappingURL=index.js.map