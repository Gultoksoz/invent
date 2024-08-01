import { Command } from "../../commands/interfaces/command";
import { getRepository } from "typeorm";
import { User } from "../models/user.model";

export class GetAllUsersCommand implements Command {
  async execute() {
    const userRepository = getRepository(User);
    return await userRepository.find();
  }
}
