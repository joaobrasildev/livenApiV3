import { NextFunction, Request, Response } from "express";
import { StatusCode } from "../../shared/utils/error.statusCode";

export const validate =
  (schema: any) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.validate({
        body: req.body,
        query: req.query,
        params: req.params,
      });

      next();
    } catch (err: any) {
      return res.status(StatusCode.BadRequest).json({ type: err.name, message: err.message });
    }
  };
