import { Router } from "express";
import messageRoutes from "./messages/messages.routes";
import loginRoutes from "./login/login.routes";
import { authorizationMiddleware } from "../middleware/autorization.middleware";

const routes = Router();

routes.use(messageRoutes);
routes.use("/login", loginRoutes);

routes.get("/", (req, res) => {
  if (req.cookies.authorization) {
    return res.redirect(302, "/chat");
  } else {
    return res.redirect(302, "/login");
  }
});

routes.get("/chat", authorizationMiddleware, (req, res) => {
  return res.render("chat/chat", {
    title: "AnoniChat",
    name: req.cookies.authorization,
  });
});

// routes.get("/api/:component", (req, res) => {
//   return res.render(req.params.component);
// });

export default routes;
