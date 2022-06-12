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
exports.deleteSource = exports.listSources = exports.createSource = void 0;
const config_1 = require("../../config");
const cache_1 = require("../cache");
const sourceCache = cache_1.SourceCache.getInstance();
const createSource = (source) => sourceCache.setValue(source.name, source);
exports.createSource = createSource;
const listSources = () => sourceCache.getData();
exports.listSources = listSources;
const deleteSource = (name) => __awaiter(void 0, void 0, void 0, function* () {
    const source = sourceCache.delete(name);
    if (!source)
        return Promise.reject(config_1.errors.resourceNotFound("Source"));
    return source;
});
exports.deleteSource = deleteSource;
//# sourceMappingURL=source.service.js.map