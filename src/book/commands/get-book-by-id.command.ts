import { Command } from "../../commands/interfaces/command";
import { getRepository } from "typeorm";
import { Book } from "../models/book.model";

export class GetBookByIdCommand implements Command {
  private bookId: number;

  constructor(bookId: number) {
    this.bookId = bookId;
  }

  async execute() {
    const bookRepository = getRepository(Book);
    return await bookRepository.findOne({
      where: { id: this.bookId },
      relations: ["borrows"],
    });
  }
}
