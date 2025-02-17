import { Request, Response } from "express";
import { insertUsername } from "../db/queries";

const getNewUser = (req: Request, res: Response) => {
  res.render("form");
};

const postNewUser = async (req: Request, res: Response) => {
  const { username } = req.body;
  console.log("username to be saved: ", username);
  await insertUsername(username);
  res.redirect("/");
};

export { getNewUser, postNewUser };
