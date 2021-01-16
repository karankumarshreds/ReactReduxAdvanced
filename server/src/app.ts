import express from "express";
import cors from "cors";

// route imoprts
import { productFetchRouter } from "./routes/products/index";
import { userFetchRouter } from "./routes/users/index";

const app = express();
app.use(cors());

// routes
app.use("/api/product", productFetchRouter);
app.use(userFetchRouter);

app.get("/", (req, res) => {
  res.send("API is running...");
});

export { app };
