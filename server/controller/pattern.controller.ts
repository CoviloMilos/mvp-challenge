import { NextFunction, Request, Response } from "express";
import { Pattern } from "../models";
import { plainToClass } from "class-transformer";
import { validateRequestBody } from "../utils";
import { createPattern, deletePattern, listPatterns } from "../services";

const PatternController = {
  createPattern: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const pattern: Pattern = plainToClass(Pattern, req.body);
      await validateRequestBody(pattern);

      createPattern(pattern);

      res.status(201).json(pattern);
    } catch (err) {
      next(err);
    }
  },
  listPatterns: async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.status(200).json(listPatterns());
    } catch (err) {
      next(err);
    }
  },
  deletePattern: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const name = <string>req.params.name;
      const pattern = await deletePattern(name);
      res.status(200).json(pattern);
    } catch (err) {
      next(err);
    }
  },
};

export default PatternController;
