import { Router } from "express";
import {
  addHistory,
  clearHistory,
  findHistory,
} from "../controller/controller.js";
import { HistoryModel } from "../model/saveHistory.js";

export const route = Router();

route.post("/addques", addHistory);
route.post("/findhistory", findHistory);
route.post("/clearhis", clearHistory);
