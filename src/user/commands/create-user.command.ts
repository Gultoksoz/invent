import { Command } from "../../commands/interfaces/command";
import { getRepository } from "typeorm";
import { User } from "../models/user.model";

export class CreateUserCommand implements Command {
  private userData: Partial<User>;

  constructor(userData: Partial<User>) {
    this.userData = userData;
  }

  async execute() {
    const userRepository = getRepository(User);
    const user = userRepository.create(this.userData);
    return await userRepository.save(user);
  }
}
