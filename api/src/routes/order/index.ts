import { Router } from "express";
import {
  postOrder,
  detailOrder,
  deleteOrder,
  StatusIncart,
  deleteProduct,
  insertProduct,
  OrderSetStatus,
  allStatusOrder,
  updataquantity,
  getAllOrderIncart,
  OrderAccordingState,
} from "../../controllers/order";

const router = Router();
///get 
router.get("/", detailOrder);
router.get("/status", StatusIncart);
router.get("/allorder", allStatusOrder);
router.get("/incart", getAllOrderIncart);
router.get("/setstatus",OrderAccordingState)
//post
router.post("/", postOrder);
//put 
router.put("/insertproduct", insertProduct);
router.put("/updataquantity", updataquantity);
router.put("/setstatus",OrderSetStatus)
//delete
router.delete("/", deleteOrder);
router.delete("/product", deleteProduct);

export default router;
