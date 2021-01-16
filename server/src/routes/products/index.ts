import express, { NextFunction, Request, Response } from "express";
import { Product } from "../../models/Product";
import { BadRequestError, NotFoundError } from "../../utils";

const router = express.Router();

/* returns list of all products */
router.get("/", async (req, res) => {
  const products = await Product.find({});
  res.send(products);
});

/* returns a single product */
router.get("/:id", async (req: Request, res: Response) => {
  const product = await Product.findOne({
    _id: req.params.id,
  });
  if (!product) {
    // console.log();
    throw new BadRequestError("Product not found");
  }
  res.send(product);
});

export { router as productFetchRouter };
