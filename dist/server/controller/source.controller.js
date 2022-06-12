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
const models_1 = require("../models");
const class_transformer_1 = require("class-transformer");
const utils_1 = require("../utils");
const services_1 = require("../services");
const SourceController = {
    createSource: (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const source = (0, class_transformer_1.plainToClass)(models_1.Source, req.body);
            yield (0, utils_1.validateRequestBody)(source);
            (0, services_1.createSource)(source);
            res.status(201).json(source);
        }
        catch (err) {
            next(err);
        }
    }),
    listSources: (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            res.status(200).json((0, services_1.listSources)());
        }
        catch (err) {
            next(err);
        }
    }),
    deleteSource: (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const name = req.params.name;
            const source = yield (0, services_1.deleteSource)(name);
            res.status(200).json(source);
        }
        catch (err) {
            next(err);
        }
    }),
};
exports.default = SourceController;
//# sourceMappingURL=source.controller.js.map