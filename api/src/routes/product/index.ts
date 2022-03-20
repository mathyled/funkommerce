import { Router } from "express";
const router = Router();
const {
  getAllFindProductsTitle,
  getProductsID,
  getAllProduct,
  deleteProduct,
  postProduct,
  putProduct,
} = require("../../controllers/product.ts");

router.get("/", getAllProduct);
router.get("/S", getAllFindProductsTitle);
router.get("/:id", getProductsID);
router.put("/",putProduct)
router.post("/",postProduct);
router.delete("/:id",deleteProduct)


export default router;
