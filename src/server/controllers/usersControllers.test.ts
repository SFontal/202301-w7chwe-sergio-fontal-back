import type { Request, Response } from "express";
import User from "../../database/models/User.js";
import { getUsers } from "./usersControllers.js";

const mockedRequest = {} as Request;

const mockedResponse: Partial<Response> = {
  status: jest.fn().mockReturnThis(),
  json: jest.fn().mockReturnValue({}),
};

describe("Given a getUsers controller", () => {
  describe("When it receives an empty object as a request, a response and User.find returns a list of users", () => {
    test("Then it should call its status method with code 200", async () => {
      User.find = jest.fn().mockImplementationOnce(() => ({
        exec: jest.fn().mockReturnValue({}),
      }));

      await getUsers(mockedRequest, mockedResponse as Response);

      expect(mockedResponse.status).toHaveBeenCalledWith(200);
    });

    test("Then it should call its json method", async () => {
      User.find = jest.fn().mockImplementationOnce(() => ({
        exec: jest.fn().mockReturnValue({}),
      }));

      await getUsers(mockedRequest, mockedResponse as Response);

      expect(mockedResponse.json).toHaveBeenCalled();
    });
  });

  describe("When it receives an empty object as a request, a response and User.find returns an error", () => {
    test("Then it should show 'Can not find any user' message in the terminal", async () => {
      User.find = jest.fn().mockReturnValue(new Error());
      const logSpy = jest.spyOn(console, "warn");
      const expectedMessage = `${"▄".repeat(60)}\n█${" ".repeat(
        58
      )}█\n█                   Can not find any user                    █\n█${" ".repeat(
        58
      )}█\n${"▀".repeat(60)}`;

      await getUsers(mockedRequest, mockedResponse as Response);

      expect(logSpy).toBeCalledWith(expectedMessage);
    });
  });
});
