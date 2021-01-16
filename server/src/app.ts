import express from "express";
import cors from "cors";

// routes
import { productFetchRouter } from "./routes/products/index";
import { userFetchRouter } from "./routes/users/index";

const app = express();
app.use(cors());

app.use(productFetchRouter);
app.use(userFetchRouter);

app.get("/", (req, res) => {
  res.send("API is running...");
});

export { app };
