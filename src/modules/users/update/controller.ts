import { Response, Request } from "express";
import * as service from "./service";

export const update = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const data = req.body;
  try {
    await service.update(data);

    return res.status(204).json();
  } catch(err: any) {
    return res.status(err.code).json({ message: err.message });
  }   
};