import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { User } from "../models/user";

declare global {
  namespace Express {
    interface Request {
      user: any;
    }
  }
}

interface IPayload {
  email: string;
  iat: number;
}

export const validateToken = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const headerToken = req.headers["authorization"];

  if (headerToken != undefined && headerToken.startsWith("Bearer ")) {
    try {
      const bearerToken = headerToken.slice(7);
      const payload = jwt.verify(
        bearerToken,
        process.env.SECRET_KEY || "secret"
      ) as IPayload;

      req.user = (await User.findOne({
        where: { email: payload.email },
      })) as any;
      next();
    } catch (error) {
      res.status(401).json({
        msg: "Token invalido",
      });
    }
  } else {
    res.status(401).json({
      msg: "Acceso denegado",
    });
  }
};
