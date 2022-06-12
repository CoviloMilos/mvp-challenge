import { NextFunction, Request, Response } from "express";
import { errors } from "../../config";

const validateQueryPattern = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    new RegExp(<string>req.query.pattern);
    next();
  } catch (error) {
    next(errors.invalidRequest([]));
  }
};

export { validateQueryPattern };
