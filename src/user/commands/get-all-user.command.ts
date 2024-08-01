import { Command } from "../../commands/interfaces/command";
import { User } from "../models/user.model";
import { AppDataSource } from "../../config/data-source";

export class GetAllUsersCommand implements Command {
  async execute() {
    const userRepository = AppDataSource.getRepository(User);
    return await userRepository.find();
  }
}
