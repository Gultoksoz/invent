import { Command } from "../../commands/interfaces/command";
import { getRepository } from "typeorm";
import { User } from "../models/user.model";

export class GetUserByIdCommand implements Command {
  private userId: number;

  constructor(userId: number) {
    this.userId = userId;
  }

  async execute() {
    const userRepository = getRepository(User);
    return await userRepository.findOne({ where: { id: this.userId } });
  }
}
