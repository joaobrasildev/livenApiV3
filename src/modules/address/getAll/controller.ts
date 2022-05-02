import {  instanceToInstance } from "class-transformer";
import { Response, Request } from "express";
import { StatusCode } from "../../../shared/utils/error.statusCode";
import * as service from "./service";

export const getAll = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const data = req.query
  const response = await service.getAll(data);

  return res.status(StatusCode.Ok).json(instanceToInstance(response));
};