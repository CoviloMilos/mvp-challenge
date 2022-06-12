"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapFulfilledPromises = void 0;
const mapFulfilledPromises = (promises) => promises
    .filter((promise) => promise.status === "fulfilled")
    .map((promise) => promise.value);
exports.mapFulfilledPromises = mapFulfilledPromises;
//# sourceMappingURL=promise-helper.js.map