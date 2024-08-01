import { Command } from "../../commands/interfaces/command";
import { Book } from "../models/book.model";
import { AppDataSource } from "../../config/data-source";

export class CreateBookCommand implements Command {
  private bookData: Partial<Book>;

  constructor(bookData: Partial<Book>) {
    this.bookData = bookData;
  }

  async execute() {
    const bookRepository = AppDataSource.getRepository(Book);
    const book = bookRepository.create(this.bookData);
    return await bookRepository.save(book);
  }
}
