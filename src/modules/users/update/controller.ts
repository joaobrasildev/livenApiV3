import {  instanceToInstance } from "class-transformer";
import { Response, Request } from "express";

import * as service from "./service";

export const update = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const data = req.body;
  await service.update(data);

  return res.status(204).json();
};