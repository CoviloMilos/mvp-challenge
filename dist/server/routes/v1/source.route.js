"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const source_controller_1 = __importDefault(require("../../controller/source.controller"));
const sourceRouter = (0, express_1.Router)();
sourceRouter.post("/sources", source_controller_1.default.createSource);
sourceRouter.get("/sources", source_controller_1.default.listSources);
sourceRouter.delete("/sources/:name", source_controller_1.default.deleteSource);
exports.default = sourceRouter;
//# sourceMappingURL=source.route.js.map