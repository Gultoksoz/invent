import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "../user/models/user.model";
import { Book } from "../book/models/book.model";
import { Borrow } from "../borrow/models/borrow.model";
import path from "path";
import * as dotenv from "dotenv";

dotenv.config({ path: `./.env` });

export const AppDataSource = new DataSource({
  type: process.env.DB_TYPE as any,
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || "5432", 10),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: [User, Book, Borrow],
  synchronize: false,
  logging: false,
  migrations: [path.join(__dirname, "../../dist/migrations/*.js")],
});


