import { Command } from "../../commands/interfaces/command";
import { User } from "../models/user.model";
import { AppDataSource } from "../../config/data-source";

export class CreateUserCommand implements Command {
  private userData: Partial<User>;

  constructor(userData: Partial<User>) {
    this.userData = userData;
  }

  async execute() {
    
    const userRepository = AppDataSource.getRepository(User);
    
    const user = userRepository.create(this.userData);
    return await userRepository.save(user);
  }
}
