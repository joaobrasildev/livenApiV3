import { Address } from "../../../shared/database/entities/address";
import * as repository from "../../../shared/repositories/address";

export const getAll = async (): Promise<Address[] | undefined> => {
  return repository.getAll();
};