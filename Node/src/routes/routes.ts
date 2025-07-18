import { Router } from "express";
import { get } from "../controllers/controllers";
const router = Router();

router.get("/", get);

export default router;
