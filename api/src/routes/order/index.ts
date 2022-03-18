import { Router } from "express";
import {
  postOrder,
  detailOrder,
  deleteOrder,
  deleteProduct,
  insertProduct,
  updataquantity,
  getAllOrderIncart,
} from "../../controllers/order";

const router = Router();

router.post("/", postOrder)
router.get("/", detailOrder);
router.delete("/", deleteOrder);
router.delete("/product", deleteProduct);
router.get("/incart", getAllOrderIncart);
router.put("/insertproduct", insertProduct)
router.put("/updataquantity",updataquantity)


export default router;
