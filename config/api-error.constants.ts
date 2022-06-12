import { ResponseError } from "../server/models";

export const errors = {
  serverError: (error: any) => {
    return new ResponseError(error.name, error.message, 500, error.stack);
  },
  invalidRequest: (error: any): ResponseError => {
    const validationErrors = error.map((e: any) => {
      const propety = e.property;
      const message = e.constraints[Object.keys(e.constraints)[0]];
      return { propety, message };
    });

    return new ResponseError(
      "Invalid request",
      "",
      400,
      undefined,
      validationErrors
    );
  },
  resourceNotFound: (resource: string) => {
    return new ResponseError(
      "Not found",
      `${resource} not found`,
      404,
      undefined
    );
  },
};
