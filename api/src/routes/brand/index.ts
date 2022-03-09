import { Router } from "express";
import { getAllBrands } from "../../controllers/cBrans";
const router = Router();

router.get("/", getAllBrands);

export default router;
