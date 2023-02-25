import "./loadEnvirontment.js";
import startServer from "./server/routers/startServer.js";
import connectDatabase from "./database/connectDatabase.js";

await startServer(+process.env.PORT!);
await connectDatabase(process.env.MONGODB_URL!);
