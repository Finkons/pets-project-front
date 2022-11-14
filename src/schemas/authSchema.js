import * as yup from "yup";

const passwordRules = /^(?!.* ).{7,32}$/;
// const phoneRules = /^[+]d{3}s[(]d{2}[)]sd{3}[-]d{2}[-]d{2}/;

export const loginSchema = yup.object().shape({
  email: yup.string().email("Please enter a valid email").required(),
  password: yup
    .string()
    .min(7, "Password must be at least 7 characters long")
    .max(32, "Password must be at most 32 characters")
    .matches(passwordRules, { message: "Please enter password without spaces" })
    .required(),
});

export const stepOneRegistSchema = yup.object().shape({
  email: yup.string().email("Please enter a valid email").required(),
  password: yup
    .string()
    .min(7, "Password must be at least 7 characters long")
    .max(32, "Password must be at most 32 characters")
    .matches(passwordRules, { message: "Please enter password without spaces" })
    .required(),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required(),
});

export const stepTwoRegistSchema = yup.object().shape({
  name: yup.string().required(),
  location: yup.array().of(yup.string()).nullable(),
  phone: yup
    .number()
    .typeError("That doesn't look like a phone number")
    .positive("A phone number can't start with a minus")
    .integer("A phone number can't include a decimal point")
    .min(8)
    // .matches(phoneRules, { message: "Please enter a string in format +380671234567" })
    .required("A phone number is required"),
});
