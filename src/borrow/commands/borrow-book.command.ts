import { Command } from "../../commands/interfaces/command";
import { IsNull, getRepository } from "typeorm";
import { Borrow } from "../models/borrow.model";
import { User } from "../../user/models/user.model";
import { Book } from "../../book/models/book.model";

export class BorrowBookCommand implements Command {
  private userId: number;
  private bookId: number;
  private borrowDate: Date;

  constructor(userId: number, bookId: number, borrowDate: Date) {
    this.userId = userId;
    this.bookId = bookId;
    this.borrowDate = borrowDate;
  }

  async execute() {
    const borrowRepository = getRepository(Borrow);
    const userRepository = getRepository(User);
    const bookRepository = getRepository(Book);

    const user = await userRepository.findOne({ where: { id: this.userId } });
    const book = await bookRepository.findOne({ where: { id: this.bookId } });

    if (user && book) {
      const existingBorrow = await borrowRepository.findOne({
        where: { book: { id: this.bookId }, returnDate: IsNull() },
        relations: ["book"],
      });

      if (existingBorrow) {
        throw new Error("This book is already borrowed and not yet returned");
      }
      const borrow = borrowRepository.create({
        user,
        book,
        borrowDate: this.borrowDate,
      });
      return await borrowRepository.save(borrow);
    }

    throw new Error("User or Book not found");
  }
}
