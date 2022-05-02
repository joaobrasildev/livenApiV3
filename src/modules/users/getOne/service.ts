import { User } from "../../../shared/database/entities/user";
import * as repository from "../../../shared/repositories/user";

export const getOne = async (id: string): Promise<User | undefined> => {

  return repository.getOne(id);
};