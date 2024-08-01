import { Command } from "../../commands/interfaces/command";
import { Book } from "../models/book.model";
import { AppDataSource } from "../../config/data-source";

export class GetBookByIdCommand implements Command {
  private bookId: number;

  constructor(bookId: number) {
    this.bookId = bookId;
  }

  async execute() {
    const bookRepository = AppDataSource.getRepository(Book);
    return await bookRepository.findOne({
      where: { id: this.bookId },
      relations: ["borrows"],
    });
  }
}
