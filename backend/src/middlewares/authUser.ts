import { Request, Response, NextFunction } from "express";

export const isAuth = (roles: string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!roles.includes(req.user.role)) {
      return res
        .status(403)
        .json(
          `Acceso denegado. Tu rol: ${req.user.role} no te permite realizar esta acción.`
        );
    }
    next();
  };
};
