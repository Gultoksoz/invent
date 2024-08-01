import { createConnection } from "typeorm";
import { User } from "../user/models/user.model";
import { Book } from "../book/models/book.model";
import { Borrow } from "../borrow/models/borrow.model";
import * as dotenv from "dotenv";

dotenv.config();

export const connectDatabase = async () => {
  await createConnection({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "myuser",
    password: "mysecretpassword",
    database: "mydb",
    entities: [User, Book, Borrow],
    synchronize: true,
    logging: false,
  });
};
