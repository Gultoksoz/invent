import { Command } from "../../commands/interfaces/command";
import { User } from "../models/user.model";
import { AppDataSource } from "../../config/data-source";

export class GetUserByIdCommand implements Command {
  private userId: number;

  constructor(userId: number) {
    this.userId = userId;
  }

  async execute() {
    const userRepository = AppDataSource.getRepository(User);
    return await userRepository.findOne({ where: { id: this.userId } });
  }
}
