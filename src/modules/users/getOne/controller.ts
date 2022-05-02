import {  instanceToInstance } from "class-transformer";
import { Response, Request } from "express";

import * as service from "./service";

export const getOne = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { id } = req.params;
  const response = await service.getOne(id);

  return res.status(200).json(instanceToInstance(response));
};