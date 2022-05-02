import { HttpError } from "../../../shared/errors/http.error";
import { StatusCode } from "../../../shared/utils/error.statusCode";
import { Error } from "../../../shared/utils/error.message";
import { Address } from "../../../shared/database/entities/address";
import { CreateAddressDto } from "../../../shared/dtos/address/create.dto";
import * as repository from "../../../shared/repositories/address";
import * as userRepository from "../../../shared/repositories/user";

export const create = async (data: CreateAddressDto): Promise<Address> => {
  const userFinded = await userRepository.getOne(data.userId);
  if(!userFinded) {
    throw new HttpError(StatusCode.NotFound, Error.UserNotFound); 
  }
  return repository.create(data);
};