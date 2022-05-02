import { Response, Request } from "express";
import { StatusCode } from "../../../shared/utils/error.statusCode";
import * as service from "./service";

export const update = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const data = req.body;
  try {
    await service.update(data);

    return res.status(StatusCode.NoContent).json();
  } catch(err: any) {
    return res.status(err.code).json({ message: err.message });
  }   
};