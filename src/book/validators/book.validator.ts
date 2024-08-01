import { body, param, ValidationChain } from "express-validator";

export const bookValidationRules = (): ValidationChain[] => {
  return [
    body("name").notEmpty().withMessage("Name is required"),
    body("name").isString().withMessage("Name must be string."),
  ];
};

export const getBookValidationRules = (): ValidationChain[] => {
  return [
    param("id")
      .isInt({ min: 1 })
      .withMessage("Book ID must be a positive integer"),
  ];
};
