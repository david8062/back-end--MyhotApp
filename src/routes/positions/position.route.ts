import { Router } from "express";
import { getPosition, getPositionForCategory } from "../../controllers/position.controllers";

const router = Router()

router.get('/', getPosition)
router.get('/categories/:id/images', getPositionForCategory)

export default router