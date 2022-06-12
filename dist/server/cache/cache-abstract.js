"use strict";
class CustomCache {
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
}
//# sourceMappingURL=cache-abstract.js.map