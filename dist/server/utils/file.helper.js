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
exports.stdoutItem = exports.readFile = exports.removeFilesFromDir = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const model_helper_1 = require("./model.helper");
const removeFilesFromDir = (dir) => {
    fs_1.default.readdir(dir, (err, files) => {
        if (err)
            throw err;
        for (const file of files) {
            fs_1.default.unlink(path_1.default.join(dir, file), (err) => {
                if (err)
                    throw err;
            });
        }
    });
};
exports.removeFilesFromDir = removeFilesFromDir;
const readFile = (path) => {
    const data = fs_1.default.readFileSync(path);
    return JSON.parse(data.toString());
};
exports.readFile = readFile;
const stdoutItem = (fileName, item) => __awaiter(void 0, void 0, void 0, function* () { return appendFileAsync(`./stdout/${fileName}.txt`, (0, model_helper_1.stdout)(item)); });
exports.stdoutItem = stdoutItem;
const appendFileAsync = (path, data) => {
    return new Promise((resolve, reject) => {
        fs_1.default.writeFile(path, data, { flag: "a" }, (err) => {
            if (err) {
                reject(err);
            }
            resolve();
        });
    });
};
//# sourceMappingURL=file.helper.js.map