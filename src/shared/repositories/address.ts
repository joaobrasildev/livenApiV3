import { getRepository } from "typeorm";
import { Address } from "../database/entities/address";
import { CreateAddressDto } from "../dtos/address/create.dto";
import { UpdateAddressDto } from "../dtos/address/update.dto";

export const create = async (data: CreateAddressDto): Promise<Address> => {
  const repository = getRepository(Address);
  return repository.save(data);
};

export const getOne = async (id: string): Promise<Address | undefined> => {
  const repository = getRepository(Address);
  return repository.findOne({ where: { id } } );
};

export const getAll = async (): Promise<Address[] | undefined> => {
  const repository = getRepository(Address);
  return repository.find();
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