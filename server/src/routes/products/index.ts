import express from "express";
import { Product } from "../../models/Product";

const router = express.Router();

router.get("/api/products", async (req, res) => {
  const products = await Product.find({});
  res.send(products);
});

export { router as productFetchRouter };
