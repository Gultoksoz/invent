import { getRepository } from "typeorm";
import { User } from "../models/user.model";

export const getAllUsers = async () => {
  const userRepository = getRepository(User);
  return await userRepository.find();
};

export const getUserById = async (id: number) => {
  const userRepository = getRepository(User);
  return await userRepository.findOne({
    where: { id },
  });
};

export const createUser = async (userData: Partial<User>) => {
  const userRepository = getRepository(User);
  const user = userRepository.create(userData);
  return await userRepository.save(user);
};
