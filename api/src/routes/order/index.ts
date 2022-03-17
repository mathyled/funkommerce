import { Router } from "express";
import {
  detailOrder,
  deleteOrder,
  postOrder,
  getAllOrderIncart,
} from "../../controllers/order";

const router = Router();

router.get("/", detailOrder);
router.delete("/", deleteOrder);
router.post("/", postOrder)
router.get("/incart", getAllOrderIncart);

export default router;
