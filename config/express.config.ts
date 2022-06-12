import express, { NextFunction, Request, Response } from "express";
import bodyParser from "body-parser";
import router from "../server/routes/v1/";
import { ResponseError } from "../server/models";
import { errors } from "./api-error.constants";
import path from "path";
const app = express();
app.use(express.json({ limit: "25mb" }));
app.use(
  bodyParser.urlencoded({
    limit: "25mb",
    extended: true,
    parameterLimit: 50000,
  })
);

app.use(express.static(path.join(__dirname, "../public")));

app.use("/api/v1", router);

app.set("view engine", "ejs");
app.use("/", (req, res, next) => {
  res.render("index");
});

app.use(
  (err: ResponseError, req: Request, res: Response, next: NextFunction) => {
    if (!err.code) {
      err = errors.serverError(err);
    }
    return res.status(err.code!).send(err);
  }
);
export const expressApp = app;
