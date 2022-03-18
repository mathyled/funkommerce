import { Router } from "express";
import {
  postOrder,
  detailOrder,
  deleteOrder,
  StatusIncart,
  deleteProduct,
  insertProduct,
  updataquantity,
  getAllOrderIncart,
} from "../../controllers/order";

const router = Router();

router.post("/", postOrder)
router.get("/", detailOrder);
router.get("/status",StatusIncart)
router.delete("/", deleteOrder);
router.delete("/product", deleteProduct);
router.get("/incart", getAllOrderIncart);
router.put("/insertproduct", insertProduct)
router.put("/updataquantity",updataquantity)


export default router;
