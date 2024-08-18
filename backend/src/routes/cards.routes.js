import { Router } from "express";
import { createCard, getAllCards, getCardByTitle } from "../controllers/cards.controllers.js";

const router = Router();

router.route("/").post(createCard);
router.route("/").get(getAllCards);
router.route("/search").get(getCardByTitle);

export default router;