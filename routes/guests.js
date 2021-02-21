import express from "express";

import {
  allGuests,
  getGuest,
  addGuest,
  deleteGuest,
  updateGuest,
} from "../controllers/guests.js";

const router = express.Router();

router.get("/", allGuests);

router.post("/", addGuest);

router.get("/:id", getGuest);

router.delete("/:id", deleteGuest);

router.patch("/:id", updateGuest);

export default router;
