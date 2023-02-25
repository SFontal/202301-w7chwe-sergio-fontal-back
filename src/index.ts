import "./loadEnvirontment.js";
import { startServer } from "./server/routers/startServer.js";

await startServer(+process.env.PORT!);
