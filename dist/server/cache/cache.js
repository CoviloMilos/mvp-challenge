"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CacheBase = void 0;
class CacheBase {
    constructor() {
        this.data = {};
    }
    setValue(key, value) {
        if (!this.data[key]) {
            this.data[key] = value;
        }
    }
    getValue(key) {
        return this.data[key];
    }
    clear() {
        this.data = {};
    }
    getData() {
        return this.data;
    }
    delete(key) {
        const value = this.data[key];
        delete this.data[key];
        return value;
    }
    exist(key) {
        return !!this.data[key];
    }
    getValues() {
        return Object.values(this.data);
    }
}
exports.CacheBase = CacheBase;
//# sourceMappingURL=cache.js.map