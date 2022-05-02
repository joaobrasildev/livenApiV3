import { createConnection } from 'typeorm';
import * as userRepository from "../../shared/repositories/user";
import * as addressRepository from "../../shared/repositories/address";
import CreateAddressBuilder from '../testBuilders/createAddress';
import CreateUserBuilder from "../testBuilders/createUser";
import { IAddress, IAddressResponse } from '../../shared/interfaces/address';

describe('Address Repository context', () => {

  beforeAll(async () => {
      await createConnection();
  });
  let userId: string
  let addressId: string

  afterEach(async() =>{
    await userRepository.remove(userId)
    await addressRepository.remove(addressId)
  })
  it('should be able to insert a new Address', async () => {
    const userBuilded = new CreateUserBuilder()
        .withName('Name Test')
        .withEmail('email.testing@test.com')
        .withPassword('Test123')
        .withCpf('11111111111')
        .withBirthDate('2000-01-01')
        .withPhone('11111111111111')
        .build();
        
        
    const user = await userRepository.create(userBuilded)
    userId = user?.id;

    const AddressBuilded = new CreateAddressBuilder()
        .withPostalCode('99999999')
        .withStreet('Street Test')
        .withNumber(10)
        .withComplement('Complement Test')
        .withNeighborhood('Neighborhood Test')
        .withState('MG')
        .withCity('City Test')
        .withCountry('BR')
        .withUserId(userId)
        .build();

    const {
        id,
        createdAt,
        updatedAt,
        ...entityProps
    } = await addressRepository.create(
      AddressBuilded
    );

    addressId = id

    expect(entityProps).toBeDefined();
    expect(id).toBeDefined();
    expect(createdAt).toBeDefined();
    expect(updatedAt).toBeDefined();
  });
  it('should be able to find an Address', async () => {
    const userBuilded = new CreateUserBuilder()
        .withName('Name Test')
        .withEmail('email.testing@test.com')
        .withPassword('Test123')
        .withCpf('11111111111')
        .withBirthDate('2000-01-01')
        .withPhone('11111111111111')
        .build();
        
        
    const user = await userRepository.create(userBuilded)
    userId = user?.id;

    const AddressBuilded = new CreateAddressBuilder()
        .withPostalCode('99999999')
        .withStreet('Street Test')
        .withNumber(10)
        .withComplement('Complement Test')
        .withNeighborhood('Neighborhood Test')
        .withState('MG')
        .withCity('City Test')
        .withCountry('BR')
        .withUserId(userId)
        .build();

    const {
        id,
        createdAt,
        updatedAt,
        ...entityProps
    } = await addressRepository.create(
      AddressBuilded
    );

    addressId = id

    const address = await addressRepository.getOne(addressId)
    
    expect(address).toBeDefined();
    expect(address?.postalCode).toEqual('99999999') 
    expect(address?.street).toEqual('Street Test') 
    expect(address?.number).toEqual(10)  
    expect(address?.complement).toEqual('Complement Test') 
    expect(address?.neighborhood).toEqual('Neighborhood Test') 
    expect(address?.state).toEqual('MG') 
    expect(address?.city).toEqual('City Test') 
    expect(address?.country).toEqual('BR') 
    expect(address?.userId).toEqual(userId) 
  });


  it('should be able to delete an Address', async () => {
    const userBuilded = new CreateUserBuilder()
        .withName('Name Test')
        .withEmail('email.testing@test.com')
        .withPassword('Test123')
        .withCpf('11111111111')
        .withBirthDate('2000-01-01')
        .withPhone('11111111111111')
        .build();
        
        
    const user = await userRepository.create(userBuilded)
    userId = user?.id;

    const AddressBuilded = new CreateAddressBuilder()
        .withPostalCode('99999999')
        .withStreet('Street Test')
        .withNumber(10)
        .withComplement('Complement Test')
        .withNeighborhood('Neighborhood Test')
        .withState('MG')
        .withCity('City Test')
        .withCountry('BR')
        .withUserId(userId)
        .build();

    const {
        id,
        createdAt,
        updatedAt,
        ...entityProps
    } = await addressRepository.create(
      AddressBuilded
    );

    addressId = id

    const address = await addressRepository.remove(addressId)
      
    expect(address).toEqual(undefined);
  });

  it('should be able to update an Address', async () => {
    const userBuilded = new CreateUserBuilder()
        .withName('Name Test')
        .withEmail('email.testing@test.com')
        .withPassword('Test123')
        .withCpf('11111111111')
        .withBirthDate('2000-01-01')
        .withPhone('11111111111111')
        .build();
        
        
    const user = await userRepository.create(userBuilded)
    userId = user?.id;

    const AddressBuilded = new CreateAddressBuilder()
        .withPostalCode('99999999')
        .withStreet('Street Test')
        .withNumber(10)
        .withComplement('Complement Test')
        .withNeighborhood('Neighborhood Test')
        .withState('MG')
        .withCity('City Test')
        .withCountry('BR')
        .withUserId(userId)
        .build();

    const {
        id,
        createdAt,
        updatedAt,
        ...entityProps
    } = await addressRepository.create(
      AddressBuilded
    );

    addressId = id

      const addressUpdateBuilded: IAddressResponse = {
        id: addressId,
        postalCode: '99999999',
        street: 'Street Test Updated',
        number: 10,
        complement: 'Complement test Updated',
        neighborhood: 'Neighborhood Test',
        state: 'SP',
        city: 'City Test',
        country: 'BR',
        userId: userId,
        createdAt: createdAt,
        updatedAt: updatedAt,        
      }
    const address = await addressRepository.update(addressUpdateBuilded);
    
    expect(address).toBeDefined();
    expect(address.street).toEqual('Street Test Updated')
    expect(address?.complement).toEqual('Complement test Updated')
    expect(address.state).toEqual('SP')

  });  
});  