import express, { Express, json } from "express";
import cors from "cors";
import { docsRouter } from "./router/docs";

const app: Express = express();
const { ENV = "local" } = process.env;

app.set("x-powered-by", false);
app.use(cors());
app.use(json());

app.use("/docs", docsRouter);
app.get("/", (req, res) => {
  res.redirect("/docs");
});

export { app };
