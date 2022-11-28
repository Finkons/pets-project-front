import * as yup from "yup";

const passwordRules = /^(?!.* ).{7,32}$/;
const addressRules = /^(?=.*[a-zа-я])(?=.*[A-ZА-Я]).{3,32},(?=.*[a-zа-я])(?=.*[A-ZА-Я]).{3,32}$/;
const phoneRules = /[+380]+[0-9].{11}/;

export const loginSchema = yup.object().shape({
  email: yup.string().email("Please enter a valid email").required("This field is required"),
  password: yup
    .string()
    .min(7, "Password must be at least 7 characters long")
    .max(32, "Password must be at most 32 characters")
    .matches(passwordRules, { message: "Please enter password without spaces" })
    .required("This field is required"),
});

export const stepOneRegistSchema = yup.object().shape({
  email: yup.string().email("Please enter a valid email").required("This field is required"),
  password: yup
    .string()
    .min(7, "Password must be at least 7 characters long")
    .max(32, "Password must be at most 32 characters")
    .matches(passwordRules, { message: "Please enter password without spaces" })
    .required("This field is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("This field is required"),
});

export const stepTwoRegistSchema = yup.object().shape({
  name: yup.string().required("This field is required"),
  address: yup.string().matches(addressRules, { message: "Please enter a string in format city, region" }).required("This field is required"),
  phone: yup.string().min(8).matches(phoneRules, { message: "Please enter a string in format +380XXXXXXXXX" }).required("This field is required"),
});
