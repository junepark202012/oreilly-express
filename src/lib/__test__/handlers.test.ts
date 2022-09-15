import * as handlers from "../handlers";
import { getMockReq, getMockRes } from "@jest-mock/express";

test("home page renders", () => {
  const req = getMockReq();
  const { res } = getMockRes();
  handlers.home(req, res);
  expect(res.render).toHaveBeenCalledWith("home");
});
