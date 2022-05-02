import { Response, Request } from "express";
import { StatusCode } from "../../../shared/utils/error.statusCode";
import * as service from "./service";

export const remove = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { id } = req.params;
  await service.remove(id);

  return res.status(StatusCode.NoContent).json();
};