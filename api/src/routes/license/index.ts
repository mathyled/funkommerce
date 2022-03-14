import { Router } from "express";


const { getAllLicense, createLicense } = require("../../controllers/license.ts");


const router = Router();

router.get("/", getAllLicense);
router.post("/", createLicense)

export default router;