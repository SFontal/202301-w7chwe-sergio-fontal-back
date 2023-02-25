import { app } from "../index.js";
import createDebug from "debug";
import type CustomError from "../../CustomError/CustomError.js";

const debug = createDebug("app:startServer");
const startServer = async (port: number) =>
  new Promise((resolve) => {
    const server = app.listen(port, () => {
      debug(
        `${"▄".repeat(60)}\n█${" ".repeat(
          58
        )}█\n█        Server is listening requests on port ${port}         █\n█${" ".repeat(
          58
        )}█\n${"▀".repeat(60)}`
      );

      resolve(server);
    });

    server.on("error", (error: CustomError) => {
      if (error.code === "EADDRINUSE") {
        debug(
          `${"▄".repeat(60)}\n█${" ".repeat(
            58
          )}█\n█               Port ${port} is already in use                █\n█${" ".repeat(
            58
          )}█\n${"▀".repeat(60)}`
        );
      }
    });
  });

export default startServer;
