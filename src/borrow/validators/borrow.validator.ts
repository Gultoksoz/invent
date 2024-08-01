import { param, body, ValidationChain } from "express-validator";

export const borrowValidationRules = (): ValidationChain[] => {
  return [
    param("userId").isInt().withMessage("User ID must be an integer"),
    param("bookId").isInt().withMessage("Book ID must be an integer"),
    param("userId").notEmpty().withMessage("User ID  is required"),
    param("bookId").notEmpty().withMessage("Book ID  is required"),
  ];
};

export const returnValidationRules = (): ValidationChain[] => {
  return [
    param("userId")
      .isInt({ min: 1 })
      .withMessage("User ID must be a positive integer"),
    param("borrowId")
      .isInt({ min: 1 })
      .withMessage("Borrow ID must be a positive integer"),
    body("score")
      .isInt({ min: 1, max: 10 })
      .withMessage("Score must be an integer between 1 and 10"),
    param("userId").notEmpty().withMessage("User ID  is required"),
    param("bookId").notEmpty().withMessage("Book ID  is required"),
  ];
};
