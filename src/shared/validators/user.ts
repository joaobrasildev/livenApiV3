import * as yup from "yup";
import { ValidatorMessages } from "../utils/validator.message";
import { REGEX_VALIDATOR_DATE, REGEX_VALIDATOR_UUID } from "../utils/validator.regex";

export const createUserSchema = yup.object().shape({
  body: yup.object({
    name: yup
      .string()
      .strict(true)
      .required(ValidatorMessages.requiredMessage("name"))
      .max(200, ValidatorMessages.maxLengthMessage("name", "200")),
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
    cpf: yup
      .string()
      .strict(true)
      .required(ValidatorMessages.requiredMessage("cpf"))
      .max(11, ValidatorMessages.maxLengthMessage("cpf", "11")),            
    birthDate: yup
      .string()
      .strict(true)
      .required(ValidatorMessages.requiredMessage("birthDate"))
      .matches(REGEX_VALIDATOR_DATE)
      .max(50, ValidatorMessages.maxLengthMessage("birthDate", "50")),
    phone: yup
      .string()
      .strict(true)
      .required(ValidatorMessages.requiredMessage("phone"))
      .max(14, ValidatorMessages.maxLengthMessage("phone", "14")),
  }),
});

export const updateUserSchema = yup.object().shape({
  body: yup.object({
    id: yup
      .string()
      .strict(true)
      .required(ValidatorMessages.requiredMessage("id"))
      .matches(REGEX_VALIDATOR_UUID, {message: ValidatorMessages.mustBeMessage("id", "uuid")}),
    name: yup
      .string()
      .strict(true)
      .required(ValidatorMessages.requiredMessage("name"))
      .max(200, ValidatorMessages.maxLengthMessage("name", "200")),
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
    cpf: yup
      .string()
      .strict(true)
      .required(ValidatorMessages.requiredMessage("cpf"))
      .max(11, ValidatorMessages.maxLengthMessage("cpf", "11")),            
    birthDate: yup
      .string()
      .strict(true)
      .required(ValidatorMessages.requiredMessage("birthDate"))
      .matches(REGEX_VALIDATOR_DATE)
      .max(50, ValidatorMessages.maxLengthMessage("birthDate", "50")),
    phone: yup
      .string()
      .strict(true)
      .required(ValidatorMessages.requiredMessage("phone"))
      .max(14, ValidatorMessages.maxLengthMessage("phone", "14")),
  }),
});