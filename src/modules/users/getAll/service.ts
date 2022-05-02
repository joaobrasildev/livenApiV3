import { User } from "../../../shared/database/entities/user";
import * as repository from "../../../shared/repositories/user";

export const getAll = async (): Promise<User[] | undefined> => {
  return repository.getAll();
};