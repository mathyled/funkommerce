import { Router } from "express";

const {
  getAllProductTest,
  getCategory,
  getAllName,
  getAllProductBands,
  getAllProductLicense
} = require("../../controllers/cProductTest.ts");

const router = Router();

router.get("/", getAllProductTest);
router.get("/category", getCategory);
router.get("/S", getAllName);
router.get("/brand", getAllProductBands)
router.get("/license", getAllProductLicense)

export default router;
