import { Request, Response } from "express";

export type handler = (req: Request, res: Response) => void;
