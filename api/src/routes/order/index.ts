import { Router } from "express";
import { postOrder, detailOrder } from "../../controllers/order";

const router = Router();

router.post("/", postOrder);
router.get("/",detailOrder)

export default router;