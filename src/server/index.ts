import express from "express";
import helmet from "helmet";
import usersRouter from "./routers/usersRouter.js";

export const app = express();

app.use(helmet());

app.use("/users", usersRouter);
