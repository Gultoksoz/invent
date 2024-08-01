import { Command } from "../../commands/interfaces/command";
import { Book } from "../models/book.model";
import { AppDataSource } from "../../config/data-source";

export class GetAllBooksCommand implements Command {
  async execute() {
    const bookRepository = AppDataSource.getRepository(Book);
    return await bookRepository.find();
  }
}
