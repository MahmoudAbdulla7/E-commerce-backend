import joi from 'joi'
import {generalFields} from '../../middleware/validation.js'
export const signUp =joi.object({
    email:generalFields.email,
    password:generalFields.password,
    cpassword:generalFields.cPassword.valid(joi.ref("password")),
    userName:joi.string().min(3).max(20).required()

})
export const resetPassword =joi.object({
    email:generalFields.email,
    password:generalFields.password,
    cpassword:generalFields.cPassword.valid(joi.ref("password")).required(),
    forgetCode:joi.string().min(6).max(6).required()
})
export const logIn =joi.object({
    email:generalFields.email,
    password:generalFields.password,
})
export const sendCode =joi.object({
    email:generalFields.email,
})