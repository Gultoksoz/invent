import { body, param, ValidationChain } from "express-validator";

export const userValidationRules = (): ValidationChain[] => {
  return [
    body("name").notEmpty().withMessage("Name is required"),
    body("name").isString().withMessage("Name is must be string"),
  ];
};

export const getUserValidationRules = (): ValidationChain[] => {
  return [
    param("id")
      .isInt({ min: 1 })
      .withMessage("User ID must be a positive integer"),
  ];
};
