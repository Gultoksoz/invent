import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Borrow } from "../../borrow/models/borrow.model";

@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @OneToMany(() => Borrow, (borrow) => borrow.book)
  borrows!: Borrow[];
}
