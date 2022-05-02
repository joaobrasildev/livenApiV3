import {  instanceToInstance } from "class-transformer";
import { Response, Request } from "express";

import * as service from "./service";

export const getAll = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const response = await service.getAll();

  return res.status(200).json(instanceToInstance(response));
};