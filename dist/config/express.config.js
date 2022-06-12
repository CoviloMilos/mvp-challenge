"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.expressApp = void 0;
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const v1_1 = __importDefault(require("../server/routes/v1/"));
const api_error_constants_1 = require("./api-error.constants");
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
app.use(express_1.default.json({ limit: "25mb" }));
app.use(body_parser_1.default.urlencoded({
    limit: "25mb",
    extended: true,
    parameterLimit: 50000,
}));
app.use(express_1.default.static(path_1.default.join(__dirname, "../public")));
app.use("/api/v1", v1_1.default);
app.set("view engine", "ejs");
app.use("/", (req, res, next) => {
    res.render("index");
});
app.use((err, req, res, next) => {
    if (!err.code) {
        err = api_error_constants_1.errors.serverError(err);
    }
    return res.status(err.code).send(err);
});
exports.expressApp = app;
//# sourceMappingURL=express.config.js.map