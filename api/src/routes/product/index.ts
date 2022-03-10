import { Router } from "express";
const router = Router();
const {
  getAllProduct,
  getAllFindProductsTitle,
  getProductsID,
  postProduct,
  deleteProduct
} = require("../../controllers/product.ts");

router.get("/", getAllProduct);
router.get("/S", getAllFindProductsTitle);
router.get("/:id", getProductsID);
router.post("/",postProduct);
router.delete("/:id",deleteProduct)

export default router;
