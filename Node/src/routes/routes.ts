import { Router } from "express";
import { find } from "../controllers/controllers";

const router = Router();

router.post("/", find);

export default router;
