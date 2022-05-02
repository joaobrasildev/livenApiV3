export class IUser {
  id?: string;
  name: string;
  email: string;
  password: string;
  cpf: string;
  birthDate: string;
  phone: string;
  createdAt?: Date;
  updatedAt?: Date;  
}

export class IUserResponse {
  id: string
  name: string;
  email: string;
  password: string;
  cpf: string;
  birthDate: string;
  phone: string;
  createdAt: Date;
  updatedAt: Date;
}