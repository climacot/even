import { Router } from "express";
import { find, get } from "../controllers/controllers";
const router = Router();

router.get("/", get);
router.post("/", find);

export default router;
