import * as yup from "yup";
import { ValidatorMessages } from "../utils/validator.message";
import { REGEX_VALIDATOR_UUID } from "../utils/validator.regex";

export const idParamSchema = yup.object().shape({
  params: yup.object({
    id: yup
      .string()
      .strict(true)
      .required(ValidatorMessages.requiredMessage("id"))
      .matches(REGEX_VALIDATOR_UUID, {message: ValidatorMessages.mustBeMessage("id", "uuid")}),
  })  
});     