import { UpdateAddressDto } from "../../../shared/dtos/address/update.dto";
import { HttpError } from "../../../shared/errors/http.error";
import * as repository from "../../../shared/repositories/address";
import { Error } from "../../../shared/utils/error.message";
import { StatusCode } from "../../../shared/utils/error.statusCode";

export const update = async (data: UpdateAddressDto): Promise<void> => {
  let dataFinded = await repository.getOne(data.id); 

  if(!dataFinded){
    throw new HttpError(StatusCode.NotFound, Error.AddressNotFound);   
  }

  await repository.update(data);
};