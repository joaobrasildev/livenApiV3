import { Address } from "../../../shared/database/entities/address";
import * as repository from "../../../shared/repositories/address";

export const getOne = async (id: string): Promise<Address | undefined> => {

  return repository.getOne(id);
};