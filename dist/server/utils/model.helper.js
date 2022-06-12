"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stdout = exports.flattenContent = exports.flattenItems = void 0;
const consts_1 = require("./consts");
const flattenItems = (feeds) => feeds.map((feed) => feed.items).flat();
exports.flattenItems = flattenItems;
const flattenContent = (item) => {
    let content = "";
    for (const [key, value] of Object.entries(item)) {
        if (consts_1.PATTERN_MATCH_PROPERTIES.includes(key)) {
            content += value + " ";
        }
    }
    return content;
};
exports.flattenContent = flattenContent;
const stdout = (item) => {
    const date = new Date().toISOString();
    const output = [
        "\n------------------------",
        `${date}: ${item.title}`,
        `Creator: ${item.creator}`,
        `Link: ${item.link}`,
        `Categories: ${item.categories}`,
        `Content: ${item.content}`,
    ];
    return output.join("\n");
};
exports.stdout = stdout;
//# sourceMappingURL=model.helper.js.map