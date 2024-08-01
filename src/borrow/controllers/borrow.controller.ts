import { Request, Response } from "express";
import { CommandHandler } from "../../commands/command.handler";
import { BorrowBookCommand } from "../commands/borrow-book.command";
import { ReturnBookCommand } from "../commands/return-book.command";

const commandHandler = new CommandHandler();

export const borrowBook = async (req: Request, res: Response) => {
  try {
    const { userId, bookId } = req.params;
    const borrowDate = new Date();
    const command = new BorrowBookCommand(
      parseInt(userId, 10),
      parseInt(bookId, 10),
      borrowDate
    );
    const newBorrow = await commandHandler.execute(command);
    res.status(204).send(newBorrow);
  } catch (error) {
    if (error instanceof Error) {
      res
        .status(500)
        .json({ message: "Failed to borrow book", error: error.message });
    } else {
      res
        .status(500)
        .json({ message: "Failed to borrow book", error: String(error) });
    }
  }
};

export const returnBook = async (req: Request, res: Response) => {
  try {
    const { userId, borrowId } = req.params;

    const { score } = req.body;

    const command = new ReturnBookCommand(
      parseInt(borrowId, 10),
      parseInt(userId, 10),
      new Date(),
      score
    );

    const updatedBorrow = await commandHandler.execute(command);

    if (updatedBorrow) {
      res.status(204).send(updatedBorrow);
    } else {
      res.status(404).json({ message: "Borrow record not found" });
    }
  } catch (error) {
    if (error instanceof Error) {
      res
        .status(500)
        .json({ message: "Failed to return book", error: error.message });
    } else {
      res
        .status(500)
        .json({ message: "Failed to return book", error: String(error) });
    }
  }
};
