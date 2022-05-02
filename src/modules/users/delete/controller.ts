import {  instanceToInstance } from "class-transformer";
import { Response, Request } from "express";

import * as service from "./service";

export const remove = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { id } = req.params;
  await service.remove(id);

  return res.status(204).json();
};