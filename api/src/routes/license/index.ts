import { Router } from "express";


const { getAllLicense } = require("../../controllers/cLicense.ts");


const router = Router();

router.get("/", getAllLicense);

export default router;