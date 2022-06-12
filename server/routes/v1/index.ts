import { Router } from "express";
import feedItemRouter from "./feed-item.route";
import patternRouter from "./pattern.route";
import sourceRouter from "./source.route";

const router: Router = Router();

router.use(sourceRouter);
router.use(patternRouter);
router.use(feedItemRouter);

export default router;
