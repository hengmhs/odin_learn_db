import { Request, Response } from "express";

const getNewUser = (req: Request, res: Response) => {
  res.render("form");
};

const postNewUser = (req: Request, res: Response) => {
  const { username } = req.body;
  console.log("username to be saved: ", username);
};

export { getNewUser, postNewUser };
