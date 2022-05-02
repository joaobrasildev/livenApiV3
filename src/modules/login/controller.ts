import { Response, Request } from "express";
import * as service from "./service";
import { StatusCode } from "../../shared/utils/error.statusCode";

export const login = async (
  req: Request,
  res: Response
): Promise<Response | undefined> => {
  const data = req.body;
  
  try {
    const response = await service.login(data);

    return res.status(StatusCode.Ok).json(response);
  } catch(err: any) {
    return res.status(err.code).json({ message: err.message });
  }   
};
