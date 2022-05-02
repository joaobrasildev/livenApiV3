import { User } from "../../../shared/database/entities/user";
import { CreateUserDto } from "../../../shared/dtos/user/create.dto";
import { HttpError } from "../../../shared/errors/http.error";
import * as repository from "../../../shared/repositories/user.repository";
import { createHash } from "../../../shared/utils/bcrypt";
import { Error } from "../../../shared/utils/error.message";
import { StatusCode } from "../../../shared/utils/error.statusCode";

export const remove = async (id: string): Promise<void> => {
  await repository.remove(id);
};