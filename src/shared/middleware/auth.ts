import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { JWTSECRET } from "../utils/constants";
import { HttpError } from "../../shared/errors/http.error";
import { Error } from "../../shared/utils/error.message";
import { StatusCode } from "../../shared/utils/error.statusCode";

export const auth = async (req: Request, res: Response, next: NextFunction) => {
  const authToken = req.headers.authorization;

  if (authToken) {
    const bearer: string[] = authToken.split(" ");
    const token = bearer[1];
    verify(token, JWTSECRET);

    next();
  } else {
    return res.status(StatusCode.Unauthorized).json({message: Error.Unauthorized});
  }
};
