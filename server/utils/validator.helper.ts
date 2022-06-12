import {
  validateOrReject,
  registerDecorator,
  ValidationOptions,
} from "class-validator";
import { errors } from "../../config";

export const validateRequestBody = async (object: Object) => {
  try {
    await validateOrReject(object);
  } catch (error) {
    return Promise.reject(errors.invalidRequest(error));
  }
};

export function IsValidRegex(validationOptions?: ValidationOptions) {
  return (object: any, propertyName: string): void => {
    registerDecorator({
      name: "IsValidRegex",
      target: object.constructor,
      propertyName,
      options: validationOptions,
      validator: {
        validate(value: any): boolean {
          try {
            new RegExp(value);
            return true;
          } catch {
            return false;
          }
        },
        defaultMessage(): string {
          return `${propertyName} must be valid regex`;
        },
      },
    });
  };
}
