import { User } from "../../../shared/database/entities/user";
import { CreateUserDto } from "../../../shared/dtos/user/create.dto";
import { HttpError } from "../../../shared/errors/http.error";
import * as repository from "../../../shared/repositories/user.repository";
import { createHash } from "../../../shared/utils/bcrypt";
import { Error } from "../../../shared/utils/error.message";
import { StatusCode } from "../../../shared/utils/error.statusCode";

export const create = async (data: CreateUserDto): Promise<User> => {
  let dataFinded = await repository.getByEmail(data.email); 
  if (dataFinded) {
    throw new HttpError(StatusCode.ConflictException, Error.UserEmailAlreadyExist); 
  }
  
  dataFinded = await repository.getByECpf(data.cpf);
  if (dataFinded) {
    throw new HttpError(StatusCode.ConflictException, Error.UserCpfAlreadyExist);  
  } 
  const hashedPassword = await createHash(data.password);

  return repository.create({ ...data, password: hashedPassword });
};