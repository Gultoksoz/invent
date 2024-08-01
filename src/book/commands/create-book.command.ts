import { Command } from "../../commands/interfaces/command";
import { getRepository } from "typeorm";
import { Book } from "../models/book.model";

export class CreateBookCommand implements Command {
  private bookData: Partial<Book>;

  constructor(bookData: Partial<Book>) {
    this.bookData = bookData;
  }

  async execute() {
    const bookRepository = getRepository(Book);
    const book = bookRepository.create(this.bookData);
    return await bookRepository.save(book);
  }
}
