import { NextFunction, Request, Response } from "express";

import { NotAuthorizedError } from "../errors/not-authorized-error";
import { TokenManager } from "../helpers/token-manager";

// Interface to represent user payload
interface UserPayload {
  id: string;
}

// Add custom property to Express Request type definintion
declare global {
  namespace Express {
    interface Request {
      currentUser?: UserPayload;
    }
  }
}

export const RequireAuth = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let token: string =
    req.body.token || req.query.token || req.headers["authorization"];

  if (!token) {
    throw new NotAuthorizedError();
  }

  token = token.split(" ")[1];
  const payload = TokenManager.verifyJwtToken(token) as UserPayload;
  req.currentUser = payload;

  next();
};

export default RequireAuth;
