import { NextFunction, Request, Response } from "express";
import { Source } from "../models";
import { plainToClass } from "class-transformer";
import { validateRequestBody } from "../utils";
import { createSource, deleteSource, listSources } from "../services";

const SourceController = {
  createSource: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const source: Source = plainToClass(Source, req.body);
      await validateRequestBody(source);

      createSource(source);

      res.status(201).json(source);
    } catch (err) {
      next(err);
    }
  },
  listSources: async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.status(200).json(listSources());
    } catch (err) {
      next(err);
    }
  },
  deleteSource: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const name = <string>req.params.name;
      const source = await deleteSource(name);
      res.status(200).json(source);
    } catch (err) {
      next(err);
    }
  },
};

export default SourceController;
