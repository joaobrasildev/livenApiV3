import * as yup from "yup";
import { ValidatorMessages } from "../utils/validator.message";
import { REGEX_VALIDATOR_DATE, REGEX_VALIDATOR_UUID } from "../utils/validator.regex";

export const createAddressSchema = yup.object().shape({
  body: yup.object({
    postalCode: yup
      .string()
      .strict(true)
      .required(ValidatorMessages.requiredMessage("postalcode"))
      .max(11, ValidatorMessages.maxLengthMessage("postalcode", "11")),
    street: yup
      .string()
      .strict(true)
      .required(ValidatorMessages.requiredMessage("street"))
      .max(100, ValidatorMessages.maxLengthMessage("street", "100")), 
    number: yup
      .number()
      .required(ValidatorMessages.requiredMessage("number")),           
    complement: yup
      .string()
      .strict(true)
      .optional()
      .max(50, ValidatorMessages.maxLengthMessage("complement", "50")),            
    neighborhood: yup
      .string()
      .strict(true)
      .required(ValidatorMessages.requiredMessage("neighborhood"))
      .max(100, ValidatorMessages.maxLengthMessage("neighborhood", "100")),
    state: yup
      .string()
      .strict(true)
      .required(ValidatorMessages.requiredMessage("state"))
      .max(2, ValidatorMessages.maxLengthMessage("state", "2")),
    city: yup
      .string()
      .strict(true)
      .required(ValidatorMessages.requiredMessage("city"))
      .max(100, ValidatorMessages.maxLengthMessage("city", "100")),
    country: yup
      .string()
      .strict(true)
      .required(ValidatorMessages.requiredMessage("country"))
      .max(2, ValidatorMessages.maxLengthMessage("country", "2")),
    userId: yup
      .string()
      .strict(true)
      .required(ValidatorMessages.requiredMessage("userId"))
      .matches(REGEX_VALIDATOR_UUID, {message: ValidatorMessages.mustBeMessage("userId", "uuid")}),
  }),
});

export const updateAddressSchema = yup.object().shape({
  body: yup.object({
    id: yup
      .string()
      .strict(true)
      .required(ValidatorMessages.requiredMessage("id"))
      .matches(REGEX_VALIDATOR_UUID, {message: ValidatorMessages.mustBeMessage("id", "uuid")}),
    postalCode: yup
      .string()
      .strict(true)
      .required(ValidatorMessages.requiredMessage("postalcode"))
      .max(11, ValidatorMessages.maxLengthMessage("postalcode", "11")),
    street: yup
      .string()
      .strict(true)
      .required(ValidatorMessages.requiredMessage("street"))
      .max(100, ValidatorMessages.maxLengthMessage("street", "100")), 
    number: yup
      .number()
      .required(ValidatorMessages.requiredMessage("number")),           
    complement: yup
      .string()
      .strict(true)
      .optional()
      .max(50, ValidatorMessages.maxLengthMessage("complement", "50")),            
    neighborhood: yup
      .string()
      .strict(true)
      .required(ValidatorMessages.requiredMessage("neighborhood"))
      .max(100, ValidatorMessages.maxLengthMessage("neighborhood", "100")),
    state: yup
      .string()
      .strict(true)
      .required(ValidatorMessages.requiredMessage("state"))
      .max(2, ValidatorMessages.maxLengthMessage("state", "2")),
    city: yup
      .string()
      .strict(true)
      .required(ValidatorMessages.requiredMessage("city"))
      .max(100, ValidatorMessages.maxLengthMessage("city", "100")),
    country: yup
      .string()
      .strict(true)
      .required(ValidatorMessages.requiredMessage("country"))
      .max(2, ValidatorMessages.maxLengthMessage("country", "2")),
    userId: yup
      .string()
      .strict(true)
      .required(ValidatorMessages.requiredMessage("userId"))
      .matches(REGEX_VALIDATOR_UUID, {message: ValidatorMessages.mustBeMessage("userId", "uuid")}),
  }),
});


export const getAllAddressSchema = yup.object().shape({
  query: yup.object({
    postalCode: yup
      .string()
      .strict(true)
      .optional()
      .max(11, ValidatorMessages.maxLengthMessage("postalcode", "11")),
    neighborhood: yup
      .string()
      .strict(true)
      .optional()
      .max(100, ValidatorMessages.maxLengthMessage("neighborhood", "100")),
    state: yup
      .string()
      .strict(true)
      .optional()
      .max(2, ValidatorMessages.maxLengthMessage("state", "2")),
    city: yup
      .string()
      .strict(true)
      .optional()
      .max(100, ValidatorMessages.maxLengthMessage("city", "100")),
    country: yup
      .string()
      .strict(true)
      .optional()
      .max(2, ValidatorMessages.maxLengthMessage("country", "2")),
    userId: yup
      .string()
      .strict(true)
      .optional()
      .matches(REGEX_VALIDATOR_UUID, {message: ValidatorMessages.mustBeMessage("userId", "uuid")}),
  }),
});
