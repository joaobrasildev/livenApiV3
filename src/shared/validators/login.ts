import * as yup from "yup";
import { ValidatorMessages } from "../utils/validator.message";

export const loginSchema = yup.object().shape({
  body: yup.object({
    email: yup
      .string()
      .strict(true)
      .required(ValidatorMessages.requiredMessage("email"))
      .max(200, ValidatorMessages.maxLengthMessage("email", "200")), 
    password: yup
      .string()
      .strict(true)
      .required(ValidatorMessages.requiredMessage("password"))
      .max(200, ValidatorMessages.maxLengthMessage("password", "200")),            
  }),
});