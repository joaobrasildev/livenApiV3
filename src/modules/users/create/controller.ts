import { Response, Request } from "express";
import * as service from "./service";

export const create = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const data = req.body;

  try {
    const response = await service.create(data); 
    
    return res.status(201).json({ id: response.id });
  } catch(err: any) {
    return res.status(err.code).json({ message: err.message });
  }  
};