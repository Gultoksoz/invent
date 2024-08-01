import { Router } from "express";
import { borrowBook, returnBook } from "../controllers/borrow.controller";
import { validate } from "../../middleware/validation-handler.middleware";
import { borrowValidationRules, returnValidationRules } from "../validators/borrow.validator";

const router = Router();

router.post("/users/:userId/borrow/:bookId",borrowValidationRules(),validate, borrowBook);
router.post("/users/:userId/return/:borrowId",returnValidationRules(),validate, returnBook);

export default router;
