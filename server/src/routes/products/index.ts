import express, { Request, Response } from "express";
import { Product } from "../../models/Product";

const router = express.Router();

/* returns list of all products */
router.get("/", async (req, res) => {
  const products = await Product.find({});
  res.send(products);
});

/* returns a single product */
router.get("/:id", async (req, res) => {
  const product = await Product.findById(req.params.id);
  res.send(product);
});

export { router as productFetchRouter };
