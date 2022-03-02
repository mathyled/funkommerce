import { Router } from "express";

const {getAllCategory} = require('../../controllers/cCategory.ts')

const router = Router();

router.get('/', getAllCategory)

export default router;