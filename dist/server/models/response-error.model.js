"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseError = void 0;
class ResponseError {
    constructor(name, message, code, stack, validationErrors) {
        this.name = name;
        this.message = message;
        this.code = code;
        this.stack = stack;
        this.validationErrors = validationErrors;
    }
}
exports.ResponseError = ResponseError;
//# sourceMappingURL=response-error.model.js.map