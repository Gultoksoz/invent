import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Borrow } from "../../borrow/models/borrow.model";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @OneToMany(() => Borrow, (borrow) => borrow.user)
  borrows!: Borrow[];
}
