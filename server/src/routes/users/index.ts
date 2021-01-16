import express from "express";
import { User } from "../../models/User";

const router = express.Router();

router.get("/api/users", async (req, res) => {
  const users = await User.find({});
  res.send(users);
});

export { router as userFetchRouter };
