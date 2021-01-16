import express from "express";
import cors from "cors";

// route imports
import { productFetchRouter } from "./routes/products/index";
import { userFetchRouter } from "./routes/users/index";
import { errorHandler } from "./utils";

const app = express();
app.use(cors());

// routes
app.use("/api/product", productFetchRouter);
app.use(userFetchRouter);

// error handler
app.use(errorHandler);

app.get("/", (req, res) => {
  res.send("API is running...");
});

export { app };
