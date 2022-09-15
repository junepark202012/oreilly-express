import { Express } from "express";
import { engine } from "express-handlebars";
import { about, home, notFound, serverError } from "./lib/handlers";

const express = require("express");
const app: Express = express();
const port = process.env.PORT || "3000";

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", __dirname + "/views");
app.use(express.static(__dirname + "/public"));

app.get("/", home);
app.get("/about", about);
app.use(notFound);
app.use(serverError);

app.listen(
  port,
  () => `Express started on http://localhost:${port}
  press Ctrl-C to terminate`
);
