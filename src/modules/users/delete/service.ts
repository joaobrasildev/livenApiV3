import * as repository from "../../../shared/repositories/user";

export const remove = async (id: string): Promise<void> => {
  await repository.remove(id);
};