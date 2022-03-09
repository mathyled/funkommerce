import { Router } from "express";
import { getAllCategories } from "../../controllers/cCategory" ;
const router = Router();

router.get("/", getAllCategories);

export default router;