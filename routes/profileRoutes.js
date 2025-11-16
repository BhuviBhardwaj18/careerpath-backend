import express from "express";
import { createProfile, getProfile, deleteProfile } from "../controllers/profileController.js";

const router = express.Router();

router.post("/", createProfile);
router.get("/:email", getProfile);
router.delete("/:email", deleteProfile);

export default router;
