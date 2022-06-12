import { NextFunction, Request, Response } from "express";
import { findFeedItemsByPattern } from "../services";

const FeedItemController = {
  findFeedItemsByPattern: async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const items = findFeedItemsByPattern(<string>req.query.pattern);
      res.status(200).json(items);
    } catch (err) {
      next(err);
    }
  },
};

export default FeedItemController;
