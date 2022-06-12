"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errors = void 0;
const models_1 = require("../server/models");
exports.errors = {
    serverError: (error) => {
        return new models_1.ResponseError(error.name, error.message, 500, error.stack);
    },
    invalidRequest: (error) => {
        const validationErrors = error.map((e) => {
            const propety = e.property;
            const message = e.constraints[Object.keys(e.constraints)[0]];
            return { propety, message };
        });
        return new models_1.ResponseError("Invalid request", "", 400, undefined, validationErrors);
    },
    resourceNotFound: (resource) => {
        return new models_1.ResponseError("Not found", `${resource} not found`, 404, undefined);
    },
};
//# sourceMappingURL=api-error.constants.js.map