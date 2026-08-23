import express from "express";
import { checkAuth } from "../controllers/auth.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";
const router=express.Router();

router.get("/check",protectRoute,checkAuth)//protectRoute use as middleware and if the user is autheticated then they can sent message
export default router