import { Router } from "express";
import { listBooks, getBook, addBook } from "../controllers/book.controller";

const router = Router();

router.get("/", listBooks);
router.get("/:id", getBook);
router.post("/", addBook);

export default router;
