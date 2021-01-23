import { Request, Response } from "express";
import { Product } from "../models/Product";
import { BadRequestError } from "../utils";

/* returns list of all products */
const getProducts = async (req: Request, res: Response) => {
  const products = await Product.find({});
  res.send(products || []);
};
/* returns a single product */
const getProductById = async (req: Request, res: Response) => {
  const product = await Product.findOne({
    _id: req.params.id,
  });
  if (!product) {
    // console.log();
    throw new BadRequestError("Product not found");
  }
  res.send(product);
};

export { getProducts, getProductById };
