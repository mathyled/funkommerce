import { Router } from "express";
import { getAllCategories } from "../../controllers/controllerCategory" ;
const router = Router();

router.get("/", getAllCategories);

export default router;