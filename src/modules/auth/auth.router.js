import { Router } from "express";
import * as authController from './controller/registration.js'
import * as validators from './auth.validation.js'
import {validation} from '../../middleware/validation.js'
const router = Router()

router.post("/signup",validation(validators.signUp),authController.signUp);
router.post("/login",validation(validators.logIn),authController.logIn);
router.get("/confirmEmail/:confirmationToken",authController.confirmationToken)
router.get("/unsubscribe/:newConfirmToken",authController.unsubscribe)
router.get("/requestNewConfirmMail/:newConfirmToken",authController.requestNewConfirmMail)
router.patch("/sendCode",validation(validators.sendCode),authController.sendCode);
router.patch("/resetPassword",validation(validators.resetPassword),authController.resetPassword);

export default router