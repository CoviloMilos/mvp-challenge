import { Router } from "express";
import SourceController from "../../controller/source.controller";

const sourceRouter: Router = Router();

sourceRouter.post("/sources", SourceController.createSource);
sourceRouter.get("/sources", SourceController.listSources);
sourceRouter.delete("/sources/:name", SourceController.deleteSource);

export default sourceRouter;
