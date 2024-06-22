import { RequestHandler } from "express";

export const authorizationMiddleware: RequestHandler = (req, res, next) => {
  const username = req.cookies.authorization;
  if (!username) {
    return res.redirect(302, "/");
  }

  next();
};
