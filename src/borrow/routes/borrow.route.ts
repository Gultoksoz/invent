import { Router } from "express";
import { borrowBook, returnBook } from "../controllers/borrow.controller";

const router = Router();

router.post("/users/:userId/borrow/:bookId", borrowBook);
router.post("/users/:userId/return/:borrowId", returnBook);

export default router;
