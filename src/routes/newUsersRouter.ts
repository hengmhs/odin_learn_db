import { Router } from "express";
import { getNewUser, postNewUser } from "../controllers/newUsersController";

const newUserRouter = Router();

newUserRouter.get("/", getNewUser);
newUserRouter.post("/", postNewUser);

export default newUserRouter;
