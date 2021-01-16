import express from "express";
import "express-async-errors";
import cors from "cors";
import { NotFoundError } from "./utils";
import { errorHandler } from "./utils/middlewares/error-handler";
import { json } from "body-parser";
// route imports
import { productFetchRouter } from "./routes/products/index";
import { userFetchRouter } from "./routes/users/index";

const app = express();
app.use(json());
app.use(cors());

// routes
app.get("/", (req, res) => {
  res.send("API is running...");
});
app.use("/api/product", productFetchRouter);
app.use("/api/user", userFetchRouter);
app.all("*", async () => {
  throw new NotFoundError();
});

// error handler
app.use(errorHandler);

export { app };
