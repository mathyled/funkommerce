import { Router } from "express";

const { getAllLicense } = require("../../controllers/cLicence.ts");

const router = Router();

router.get("/", getAllLicense);

export default router;