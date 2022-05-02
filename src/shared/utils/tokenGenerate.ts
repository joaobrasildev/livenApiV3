import jwt from "jsonwebtoken";
import { IPayload } from "../interfaces/tokenGenerate";
import { JWTSECRET } from "./constants";
export const tokenGenerate = (payload: IPayload) => {
  const token = jwt.sign(payload, JWTSECRET, { expiresIn: "2d" });

  return token;
};
