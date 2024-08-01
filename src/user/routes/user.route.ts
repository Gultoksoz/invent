import { Router } from "express";
import { listUsers, getUser, addUser } from "../controllers/user.controller";
import {
  userValidationRules,
  getUserValidationRules,
} from "../validators/user.validator";
import { validate } from "../../middleware/validation-handler.middleware";

const router = Router();

router.get("/", listUsers);
router.get("/:id", getUserValidationRules(), validate, getUser);
router.post("/", userValidationRules(), validate, addUser);

export default router;
