import {  instanceToInstance } from "class-transformer";
import { Response, Request } from "express";

import * as service from "./service";

export const create = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const data = req.body;
  const response = await service.create(data);

  return res.status(201).json(instanceToInstance(response));
};