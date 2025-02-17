import { Request, Response } from "express";
import { getAllUserNames } from "../db/queries";

const getUsers = async (req: Request, res: Response) => {
  const usernames = await getAllUserNames();
  console.log("Usernames: ", usernames);
  res.send("Usernames: " + usernames.map((user) => user.username).join(", "));
};

export { getUsers };
