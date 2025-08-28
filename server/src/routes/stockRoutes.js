import express from "express";
import {
  getStockQuote,
  getStockChart,
  getMultipleStocks,
} from "../controllers/stockController.js";

const router = express.Router();

// GET single stock quote
router.get("/quote/:symbol", getStockQuote);

// GET historical chart data
router.get("/chart/:symbol", getStockChart);

// GET multiple stocks data
router.post("/multiple", getMultipleStocks);

export default router;
