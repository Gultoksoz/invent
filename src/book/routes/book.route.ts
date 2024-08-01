import { Router } from "express";
import { listBooks, getBook, addBook } from "../controllers/book.controller";
import { validate } from "../../middleware/validation-handler.middleware";
import { bookValidationRules, getBookValidationRules } from "../validators/book.validator";

const router = Router();

router.get("/", listBooks);
router.get("/:id",getBookValidationRules(), validate, getBook);
router.post("/",bookValidationRules(), validate, addBook);

export default router;
