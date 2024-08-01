import { Request, Response } from "express";
import { CommandHandler } from "../../commands/command.handler";
import { CreateUserCommand } from "../commands/create-user.command";
import { GetUserByIdCommand } from "../commands/get-user-by-id.command";
import { GetAllUsersCommand } from "../commands/get-all-user.command";

const commandHandler = new CommandHandler();

export const listUsers = async (req: Request, res: Response) => {
  try {
    const command = new GetAllUsersCommand();
    const users = await commandHandler.execute(command);
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Failed to list users", error });
  }
};

export const getUser = async (req: Request, res: Response) => {
  try {
    const command = new GetUserByIdCommand(parseInt(req.params.id, 10));
    const user = await commandHandler.execute(command);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Failed to get user", error });
  }
};

export const addUser = async (req: Request, res: Response) => {
  try {
    const command = new CreateUserCommand(req.body);
    const newUser = await commandHandler.execute(command);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: "Failed to create user", error });
  }
};
