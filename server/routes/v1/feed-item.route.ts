import { Router } from "express";
import FeedItemController from "../../controller/feed-item.controller";
import { validateQueryPattern } from "../../middlewares";

const feedItemRouter: Router = Router();

feedItemRouter.get(
  "/feed-items",
  validateQueryPattern,
  FeedItemController.findFeedItemsByPattern
);

export default feedItemRouter;
