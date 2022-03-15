import { Router } from "express";
import { postOrder, detailOrder, deleteOrder } from "../../controllers/order";

const router = Router();

router.post("/", postOrder);
router.delete("/", deleteOrder);
router.get("/", detailOrder);

export default router;
