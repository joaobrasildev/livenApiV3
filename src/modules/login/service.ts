import bcrypt from "bcryptjs";
import { LoginDto } from "../../shared/dtos/login/login.dto";
import * as repository from "../../shared/repositories/user";
import { HttpError } from "../../shared/errors/http.error";
import { StatusCode } from '../../shared/utils/error.statusCode'
import { Error } from "../../shared/utils/error.message";
import { tokenGenerate } from "../../shared/utils/tokenGenerate";

export const login = async (data: LoginDto): Promise<string> => {
  const dataFinded = await repository.getByEmail(data.email);
  if (!dataFinded) {
    throw new HttpError(StatusCode.Forbidden, Error.InvalidCredentials);
  }

  const correctLogin = bcrypt.compareSync(data.password, dataFinded.password);
  if (!correctLogin) {
    throw new HttpError(StatusCode.Forbidden, Error.InvalidCredentials);
  } 

  const payload = {
    id: dataFinded.id,
    email: dataFinded.email,
    cpf: dataFinded.cpf
  };

  return await tokenGenerate(payload);
};
