import { Entity, PrimaryGeneratedColumn, ManyToOne, Column } from "typeorm";
import { User } from "../../user/models/user.model";
import { Book } from "../../book/models/book.model";

@Entity()
export class Borrow {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => User, (user) => user.borrows)
  user!: User;

  @ManyToOne(() => Book, (book) => book.borrows)
  book!: Book;

  @Column()
  borrowDate!: Date;

  @Column({ nullable: true })
  returnDate?: Date;

  @Column({ nullable: true })
  score?: number;
}
