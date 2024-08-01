import { Command } from "./interfaces/command";

export class CommandHandler {
  async execute(command: Command) {
    return await command.execute();
  }
}
