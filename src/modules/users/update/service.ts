import { UpdateUserDto } from "../../../shared/dtos/user/update.dto";
import { HttpError } from "../../../shared/errors/http.error";
import * as repository from "../../../shared/repositories/user";
import { createHash } from "../../../shared/utils/bcrypt";
import { Error } from "../../../shared/utils/error.message";
import { StatusCode } from "../../../shared/utils/error.statusCode";

export const update = async (data: UpdateUserDto): Promise<void> => {
  let dataFinded = await repository.getOne(data.id); 

  if(!dataFinded){
    throw new HttpError(StatusCode.NotFound, Error.UserNotFound);   
  }
  
  const emailFinded = await repository.getByEmail(data.email);
  if (emailFinded && emailFinded.email !== data.email ) {
    throw new HttpError(StatusCode.ConflictException, Error.UserEmailAlreadyExist); 
  }

  const cpfFinded = await repository.getByECpf(data.cpf);
  if (cpfFinded && cpfFinded.cpf !== data.cpf) {
    throw new HttpError(StatusCode.ConflictException, Error.UserCpfAlreadyExist);  
  }  
  const hashedPassword = await createHash(data.password);

  await repository.update({ ...data, password: hashedPassword });
};