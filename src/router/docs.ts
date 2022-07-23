import { Router } from "express";
import { setup, serve } from "swagger-ui-express";
import openapi from "../../openapi.json";

export const docsRouter: Router = Router();

docsRouter.use("/", serve);
docsRouter.get("/", setup(openapi));
