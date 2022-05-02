import { getRepository } from "typeorm";
import { User } from "../database/entities/user";
import { CreateUserDto } from "../dtos/user/create.dto";
import { UpdateUserDto } from "../dtos/user/update.dto";

export const create = async (data: CreateUserDto): Promise<User> => {
  const repository = getRepository(User);
  return repository.save(data);
};

export const getOne = async (id: string): Promise<User | undefined> => {
  const repository = getRepository(User);
  return repository.findOne({ where: { id } });
};

export const getAll = async (): Promise<User[] | undefined> => {
  const repository = getRepository(User);
  return repository.find();
};

export const getByEmail = async (email: string): Promise<User | undefined |null> => {
  const repository = getRepository(User);
  return repository.findOne({ where: { email } });
}

export const getByECpf= async (email: string): Promise<User | undefined |null> => {
  const repository = getRepository(User);
  return repository.findOne({ where: { email } });
}

export const update = async (data: UpdateUserDto): Promise<void> => {
  const repository = getRepository(User);
  const dataUpdated = await repository.create(data);
  await repository.save(dataUpdated)
};

export const remove = async (id: string): Promise<void> => {
  const repository = getRepository(User);
  await repository.createQueryBuilder().delete().where({ id }).execute();
};