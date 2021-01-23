import express from "express";

// controllers
import {
  getProductById,
  getProducts,
} from "../../controllers/product-controllers";

const router = express.Router();

router.route("/").get(getProducts);
router.route("/:id").get(getProductById);

export { router as productFetchRouter };
