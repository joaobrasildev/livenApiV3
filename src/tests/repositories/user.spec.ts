import { createConnection } from 'typeorm';
import { IUser, IUserResponse } from "../../shared/interfaces/user";
import * as userRepository from "../../shared/repositories/user";
import CreateUserBuilder from "../testBuilders/createUser";
describe('User Repository context', () => {

  beforeAll(async () => {
      await createConnection();
  });
  let userId: string

  afterEach(async() =>{
    await userRepository.remove(userId)
  })
  it('should be able to insert a new User', async () => {
    const userBuilded = new CreateUserBuilder()
        .withName('Name Test')
        .withEmail('email.testing@test.com')
        .withPassword('Test123')
        .withCpf('11111111111')
        .withBirthDate('2000-01-01')
        .withPhone('11111111111111')
        .build();

    const {
        id,
        createdAt,
        updatedAt,
        ...entityProps
    } = await userRepository.create(
      userBuilded as IUser,
    );
    userId = id;

    expect(entityProps).toBeDefined();
    expect(id).toBeDefined();
    expect(createdAt).toBeDefined();
    expect(updatedAt).toBeDefined();
  });
  it('should be able to find an User', async () => {
    const userBuilded = new CreateUserBuilder()
        .withName('Name Test')
        .withEmail('email.testing@test.com')
        .withPassword('Test123')
        .withCpf('11111111111')
        .withBirthDate('2000-01-01')
        .withPhone('11111111111111')
        .build();

    const {
        id
    } = await userRepository.create(
      userBuilded as IUser,
    );

    userId = id;
    const user = await userRepository.getOne(userId);
    
    expect(user).toBeDefined();
    expect(user?.name).toEqual('Name Test') 
    expect(user?.email).toEqual('email.testing@test.com') 
    expect(user?.password).toEqual('Test123')  
    expect(user?.cpf).toEqual('11111111111') 
    expect(user?.phone).toEqual('11111111111111') 
  });


  it('should be able to delete an User', async () => {
    const userBuilded = new CreateUserBuilder()
        .withName('Name Test')
        .withEmail('email.testing@test.com')
        .withPassword('Test123')
        .withCpf('11111111111')
        .withBirthDate('2000-01-01')
        .withPhone('11111111111111')
        .build();

    const {
        id
    } = await userRepository.create(
      userBuilded as IUser,
    );
    userId = id;
    const user = await userRepository.remove(userId);
      
    expect(user).toEqual(undefined);
  });

  it('should be able to update an User', async () => {
    const userBuilded = new CreateUserBuilder()
        .withName('Name Test')
        .withEmail('email.testing@test.com')
        .withPassword('Test123')
        .withCpf('11111111111')
        .withBirthDate('2000-01-01')
        .withPhone('11111111111111')
        .build();

    const {
        id,
        createdAt,
        updatedAt
    } = await userRepository.create(
      userBuilded,
    );
    userId = id;
      const userUpdateBuilded: IUserResponse = {
        id: userId,
        name: 'Name Test Update',
        email: 'email.testing@test.com',
        password: 'Test123',
        cpf: '11111111111',
        birthDate: '2000-01-01',
        phone: '11111111111111',
        createdAt: createdAt,
        updatedAt: updatedAt,        
      }
  const user = await userRepository.update(userUpdateBuilded);
    
  expect(user).toBeDefined();
  expect(user.name).toEqual('Name Test Update')
  });  
});  