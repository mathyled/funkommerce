import { Router } from "express";
import { getAllCategories } from "../../controllers/category" ;
const router = Router();

router.get("/", getAllCategories);

export default router;