import { Command } from "../../commands/interfaces/command";
import { getRepository } from "typeorm";
import { Book } from "../models/book.model";

export class GetAllBooksCommand implements Command {
  async execute() {
    const bookRepository = getRepository(Book);
    return await bookRepository.find();
  }
}
