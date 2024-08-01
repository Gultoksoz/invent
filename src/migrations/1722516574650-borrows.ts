import { MigrationInterface, QueryRunner } from "typeorm";

export class Borrows1722516574650 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        CREATE TABLE "borrow" (
            "id" SERIAL NOT NULL,
            "borrowDate" TIMESTAMP NOT NULL,
            "returnDate" TIMESTAMP,
            "score" INTEGER,
            "userId" INTEGER,
            "bookId" INTEGER,
            CONSTRAINT "PK_borrow_id" PRIMARY KEY ("id"),
            CONSTRAINT "FK_borrow_user" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE,
            CONSTRAINT "FK_borrow_book" FOREIGN KEY ("bookId") REFERENCES "book"("id") ON DELETE CASCADE
        )
    `),undefined;
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "borrow"`,undefined);
    }

}
