import { Router } from "express";

const { getAllBrand } = require("../../controllers/cBrand.ts");

const router = Router();

router.get("/", getAllBrand);

export default router;