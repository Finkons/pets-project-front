import * as yup from "yup";

const passwordRules = /^(?!.* ).{7,32}$/;

export const loginSchema = yup.object().shape({
  email: yup.string().email("Please enter a valid email").required(),
  password: yup
    .string()
    .min(7, "Password must be at least 7 characters long")
    .max(32, "Password must be at most 32 characters")
    .matches(passwordRules, { message: "Please enter password without spaces" })
    .required(),
});
