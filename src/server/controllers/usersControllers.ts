import createDebug from "debug";
import type { Request, Response } from "express";
import User from "../../database/models/User.js";

export const getUsers = async (req: Request, res: Response) => {
  const debug = createDebug("app:getUsers");
  try {
    const users = await User.find().exec();

    res.status(200).json({ users });
  } catch (error) {
    debug(
      `${"▄".repeat(60)}\n█${" ".repeat(
        58
      )}█\n█                   Can not find any user                    █\n█${" ".repeat(
        58
      )}█\n${"▀".repeat(60)}`
    );
  }
};
