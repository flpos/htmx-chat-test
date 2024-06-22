import { Router } from "express";

const routes = Router();

routes.post("/", (req, res) => {
  res.cookie("authorization", req.body.name, {
    maxAge: 900000,
    httpOnly: true,
    secure: true,
  });
  return res.redirect(301, "/");
});

routes.get("/", (req, res) => {
  return res.render("login/login", { title: "AnoniChat" });
});

export default routes;
