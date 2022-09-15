import { ErrorRequestHandler, Express } from "express";
import { engine } from "express-handlebars";

const express = require("express");
const app: Express = express();
const port = process.env.PORT || "3000";

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", __dirname + "/views");
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/about", (req, res) => {
  const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
  res.render("about", { fortune: randomFortune });
});

app.use((req, res) => {
  res.type("text/plain");
  res.status(404);
  res.send("404 - Not Found!");
});

app.use(<ErrorRequestHandler>((err, req, res, next) => {
  console.error(err.mesage);
  res.type("text/plain");
  res.status(500);
  res.send("500 - Server Error");
}));

app.listen(
  port,
  () => `Express started on http://localhost:${port};
press Ctrl-C to terminate`
);

const fortunes = [
  "Conquer your fears or they will conquer you.",
  "Rivers need springs.",
  "Do not fear what you don't know.",
  "You will have a pleasant surprise.",
  "Whenever possible, keep it simple.",
];
