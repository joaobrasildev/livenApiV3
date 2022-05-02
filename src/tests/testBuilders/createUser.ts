import { IUser } from '../../shared/interfaces/user';

export default class CreateUserBuilder {
    user: IUser;

    constructor() {
        this.user = {} as IUser;
    }

    public withId(id: string): CreateUserBuilder {
      this.user.id = id;
      return this;
    }
    public withName(name: string): CreateUserBuilder {
        this.user.name = name;
        return this;
    }

    public withEmail(email: string): CreateUserBuilder {
      this.user.email = email;
      return this;
    }

    public withPassword(password: string): CreateUserBuilder {
        this.user.password = password;
        return this;
    }
    
    public withCpf(cpf: string): CreateUserBuilder {
      this.user.cpf = cpf;
      return this;
    }
    public withBirthDate(birthDate: string): CreateUserBuilder {
      this.user.birthDate = birthDate;
      return this;
    }
    public withPhone(phone: string): CreateUserBuilder {
      this.user.phone = phone;
      return this;
    }

    public withCreatedAt(createdAt: Date): CreateUserBuilder {
      this.user.createdAt = createdAt;
      return this;
    }   
    
    public withUpdatedAt(updatedAt: Date): CreateUserBuilder {
      this.user.updatedAt = updatedAt;
      return this;
    } 

    public build(): IUser {
        return this.user;
    }
}
