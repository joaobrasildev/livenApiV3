import {  instanceToInstance } from "class-transformer";
import { Response, Request } from "express";
import { StatusCode } from "../../../shared/utils/error.statusCode";
import * as service from "./service";

export const getOne = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { id } = req.params;
  const response = await service.getOne(id);

  return res.status(StatusCode.Ok).json(instanceToInstance(response));
};