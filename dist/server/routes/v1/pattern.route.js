"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const pattern_controller_1 = __importDefault(require("../../controller/pattern.controller"));
const patternRouter = (0, express_1.Router)();
patternRouter.post("/patterns", pattern_controller_1.default.createPattern);
patternRouter.get("/patterns", pattern_controller_1.default.listPatterns);
patternRouter.delete("/patterns/:name", pattern_controller_1.default.deletePattern);
exports.default = patternRouter;
//# sourceMappingURL=pattern.route.js.map