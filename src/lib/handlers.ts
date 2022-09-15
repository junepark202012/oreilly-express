import { getFortune } from "./fortunes";
import { ErrorRequestHandler } from "express";
import { handler } from "./types";

export const home: handler = (req, res) => {
  res.render("home");
};

export let about: handler = (req, res) => {
  const randomFortune = getFortune();
  res.render("about", { fortune: randomFortune });
};

export const notFound: handler = (req, res) => {
  res.render("404");
};

export const serverError: ErrorRequestHandler = (err, req, res, next) => {
  res.render("500");
};
