import express from "express";
import { USER_PATH } from "./router";
const router = express.Router();

router.get(USER_PATH, (req: express.Request, res: express.Response) => {
  res.send(JSON.stringify("hello user"));
});

export const user = router;
