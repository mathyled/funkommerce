import { Router } from "express";
import { getAllCategories, createCatefory } from "../../controllers/category" ;
const router = Router();

router.get("/", getAllCategories);
router.post("/", createCatefory);

export default router;