import express from "express";
import {
  forgotPassword,
  login,
  resetPassword,
  signup,
  updateProfile,
  verifyEmail,
} from "../controller/user.controller";
import { isAuthenticated } from "../middlewares/isAuthenticated";
const router = express.Router();

router.route("/signup").post(signup);
router.route("/login").post(login);
router.route("/verify-email").post(verifyEmail);
router.route("/forgot-password").post(forgotPassword);
router.route("/reset-password/:token").post(resetPassword);
router.route("/profile/update").put(isAuthenticated, updateProfile);

export default router;
