import * as Yup from 'yup';

export const signup = Yup.object({
    fullName: Yup.string().min(3).required("Please enter your full name"),
    email: Yup.string().email("Invalid email address").required("Please enter your Email"),
    password: Yup.string().min(8).required("Please enter your Password")
})


export const login = Yup.object({
    email: Yup.string().email("Invalid email address").required("Please enter your Email"),
    password: Yup.string().min(8).required("Please enter your Password")
})


export const emailVerify = Yup.object({
    randomOtp: Yup.string().required("Please enter your OTP Number")
})