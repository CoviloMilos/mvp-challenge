import { Router } from "express";
import PatternController from "../../controller/pattern.controller";

const patternRouter: Router = Router();

patternRouter.post("/patterns", PatternController.createPattern);
patternRouter.get("/patterns", PatternController.listPatterns);
patternRouter.delete("/patterns/:name", PatternController.deletePattern);

export default patternRouter;
