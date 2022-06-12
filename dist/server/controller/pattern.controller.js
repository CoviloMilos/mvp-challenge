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
const PatternController = {
    createPattern: (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const pattern = (0, class_transformer_1.plainToClass)(models_1.Pattern, req.body);
            yield (0, utils_1.validateRequestBody)(pattern);
            (0, services_1.createPattern)(pattern);
            res.status(201).json(pattern);
        }
        catch (err) {
            next(err);
        }
    }),
    listPatterns: (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            res.status(200).json((0, services_1.listPatterns)());
        }
        catch (err) {
            next(err);
        }
    }),
    deletePattern: (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const name = req.params.name;
            const pattern = yield (0, services_1.deletePattern)(name);
            res.status(200).json(pattern);
        }
        catch (err) {
            next(err);
        }
    }),
};
exports.default = PatternController;
//# sourceMappingURL=pattern.controller.js.map