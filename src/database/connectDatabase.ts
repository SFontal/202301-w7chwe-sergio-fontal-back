import createDebug from "debug";
import mongoose from "mongoose";

const debug = createDebug("app:connectDB");

const connectDatabase = async (url: string) => {
  mongoose.set("strictQuery", false);

  try {
    await mongoose.connect(url);
    debug(
      `${"▄".repeat(60)}\n█${" ".repeat(
        58
      )}█\n█                Connected to the database                 █\n█${" ".repeat(
        58
      )}█\n${"▀".repeat(60)}`
    );
  } catch (error) {
    debug(
      `${"▄".repeat(60)}\n█${" ".repeat(
        58
      )}█\n█             Error connecting to the database             █\n█${" ".repeat(
        58
      )}█\n${"▀".repeat(60)}`
    );
  }
};

export default connectDatabase;
