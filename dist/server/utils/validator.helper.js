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
exports.IsValidRegex = exports.validateRequestBody = void 0;
const class_validator_1 = require("class-validator");
const config_1 = require("../../config");
const validateRequestBody = (object) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, class_validator_1.validateOrReject)(object);
    }
    catch (error) {
        return Promise.reject(config_1.errors.invalidRequest(error));
    }
});
exports.validateRequestBody = validateRequestBody;
function IsValidRegex(validationOptions) {
    return (object, propertyName) => {
        (0, class_validator_1.registerDecorator)({
            name: "IsValidRegex",
            target: object.constructor,
            propertyName,
            options: validationOptions,
            validator: {
                validate(value) {
                    try {
                        new RegExp(value);
                        return true;
                    }
                    catch (_a) {
                        return false;
                    }
                },
                defaultMessage() {
                    return `${propertyName} must be valid regex`;
                },
            },
        });
    };
}
exports.IsValidRegex = IsValidRegex;
//# sourceMappingURL=validator.helper.js.map