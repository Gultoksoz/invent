import { Command } from "../../commands/interfaces/command";
import { getRepository } from "typeorm";
import { Borrow } from "../models/borrow.model";
import { User } from "../../user/models/user.model";

export class ReturnBookCommand implements Command {
  private borrowId: number;
  private userId: number;
  private returnDate: Date;
  private score: number;

  constructor(
    borrowId: number,
    userId: number,
    returnDate: Date,
    score: number
  ) {
    this.userId = userId;
    this.borrowId = borrowId;
    this.returnDate = returnDate;
    this.score = score;
  }

  async execute() {
    const borrowRepository = getRepository(Borrow);
    const userRepository = getRepository(User);

    const user = await userRepository.findOne({ where: { id: this.userId } });
    if (!user) {
      throw new Error("User not found");
    }

    const borrow = await borrowRepository.findOne({
      where: { id: this.borrowId, user },
      relations: ["user"],
    });

    if (borrow) {
      if (borrow.returnDate) {
        throw new Error("This book has already been returned");
      }
      borrow.returnDate = this.returnDate;
      borrow.score = this.score;
      return await borrowRepository.save(borrow);
    }

    return null;
  }
}
