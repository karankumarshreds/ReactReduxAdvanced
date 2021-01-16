import express, { Request, Response } from "express";
import { Product } from "../../models/Product";
import { NotFoundError } from "../../utils";

const router = express.Router();

/* returns list of all products */
router.get("/", async (req, res) => {
  const products = await Product.find({});
  res.send(products);
});

/* returns a single product */
router.get("/:id", async (req: Request, res: Response) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    throw new NotFoundError();
  }
  res.send(product);
});

export { router as productFetchRouter };
