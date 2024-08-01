import { Request, Response } from "express";
import { CommandHandler } from "../../commands/command.handler";
import { CreateBookCommand } from "../commands/create-book.command";
import { GetBookByIdCommand } from "../commands/get-book-by-id.command";
import { GetAllBooksCommand } from "../commands/get-all-books.command";

const commandHandler = new CommandHandler();

export const listBooks = async (req: Request, res: Response) => {
  try {
    const command = new GetAllBooksCommand();
    const books = await commandHandler.execute(command);
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: "Failed to list books", error });
  }
};

export const getBook = async (req: Request, res: Response) => {
  try {
    const command = new GetBookByIdCommand(parseInt(req.params.id, 10));
    const book = await commandHandler.execute(command);
    if (book) {
      res.json(book);
    } else {
      res.status(404).json({ message: "Book not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Failed to get book", error });
  }
};

export const addBook = async (req: Request, res: Response) => {
  try {
    const command = new CreateBookCommand(req.body);
    const newBook = await commandHandler.execute(command);
    res.status(201).json(newBook);
  } catch (error) {
    res.status(500).json({ message: "Failed to create book", error });
  }
};
