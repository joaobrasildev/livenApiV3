import * as repository from "../../../shared/repositories/address";

export const remove = async (id: string): Promise<void> => {
  await repository.remove(id);
};