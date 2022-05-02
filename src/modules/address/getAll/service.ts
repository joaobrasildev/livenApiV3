import { Address } from "../../../shared/database/entities/address";
import { GetAllAddressDto } from "../../../shared/dtos/address/getAll.dto";
import * as repository from "../../../shared/repositories/address";

export const getAll = async (data: GetAllAddressDto): Promise<Address[] | undefined> => {
  return repository.getAll(data);
};