import { Router } from "express";
import {
  postOrder,
  detailOrder,
  deleteOrder,
  getAllOrderIncart,
} from "../../controllers/order";

const router = Router();

router.post("/", getAllOrderIncart)
router.get("/", detailOrder);
router.delete("/", deleteOrder);
router.get("/status", getAllOrderIncart);

export default router;
