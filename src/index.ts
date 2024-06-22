import express from "express";
import jsxEngine from "express-react-views";
import routes from "./api/routes";
import cookieParser from "cookie-parser";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.set("views", __dirname + "/views");
app.set("view engine", "tsx");
app.engine("tsx", jsxEngine.createEngine());

app.use(express.static(__dirname + "/static"));

app.use(routes);

app.listen(3000, () => {
  console.log("servidor rodando na porta 3000");
});
