import { getRepository } from "typeorm";
import { Address } from "../database/entities/address";
import { CreateAddressDto } from "../dtos/address/create.dto";
import { UpdateAddressDto } from "../dtos/address/update.dto";
import { GetAllAddressDto } from "../dtos/address/getAll.dto"

const buildFilter = (data: GetAllAddressDto) => {
  const repository = getRepository(Address);
  const { postalCode, neighborhood, state, city, country, userId } = data;
  const query = repository.createQueryBuilder('addresses')

  if (postalCode) {
    query.andWhere('addresses.postalCode = :postalCode', { postalCode } )
  }
  if (neighborhood) {
    query.andWhere('addresses.neighborhood = :neighborhood', { neighborhood } )
  }
  if (state) {
    query.andWhere('addresses.state = :state', { state } )
  }
  if (city) {
    query.andWhere('addresses.city = :city', { city } )
  }
  if (country) {
    query.andWhere('addresses.country = :country', { country } )
  }
  if (userId) {
    query.andWhere('addresses.userId = :userId', { userId } )
  }  
  return query
}

export const create = async (data: CreateAddressDto): Promise<Address> => {
  const repository = getRepository(Address);
  return repository.save(data);
};

export const getOne = async (id: string): Promise<Address | undefined> => {
  const repository = getRepository(Address);
  return repository.findOne({ where: { id } } );
};

export const getAll = async (params: GetAllAddressDto): Promise<Address[] | undefined> => {
  const query = await buildFilter(params)
  const data = query.getMany()
  return data;
};

export const getByUser = async (userId: string): Promise<Address[] | undefined> => {
  const repository = getRepository(Address);
  return repository.find({ where: { userId } });
}

export const update = async (data: UpdateAddressDto): Promise<void> => {
  const repository = getRepository(Address);
  const dataUpdated = await repository.create(data);
  await repository.save(dataUpdated)
};

export const remove = async (id: string): Promise<void> => {
  const repository = getRepository(Address);
  await repository.createQueryBuilder().delete().where({ id }).execute();
};