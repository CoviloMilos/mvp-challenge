"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("./config");
const server_1 = require("./server");
const utils_1 = require("./server/utils");
const startupConfig = () => {
    // Clear all content in stdout
    (0, utils_1.removeFilesFromDir)(`${config_1.STDOUT}`);
    // Load default RSS Feed sources
    const sourceCache = server_1.SourceCache.getInstance();
    const defaultSources = (0, utils_1.readFile)("./db/sources.json");
    defaultSources.forEach((source) => sourceCache.setValue(source.name, source));
    // Load default regex patterns
    const patternCache = server_1.PatternCache.getInstance();
    const defaultPatterns = (0, utils_1.readFile)("./db/patterns.json");
    defaultPatterns.forEach((pattern) => patternCache.setValue(pattern.name, pattern));
};
exports.default = startupConfig;
//# sourceMappingURL=seed.js.map