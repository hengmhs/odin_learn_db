import { Request, Response } from "express";
import { getAllUserNames, searchUsername } from "../db/queries";

const getUsers = async (req: Request, res: Response) => {
  const { search } = req.query;
  if (!search) {
    const usernames = await getAllUserNames();
    res.send("Usernames: " + usernames.map((user) => user.username).join(", "));
    return;
  }
  // handle searches via GET /?search=
  const usernames = await searchUsername(search as string);
  res.send(
    `Usernames containing the case-sensitive string ${search}: ` +
      usernames.map((user) => user.username).join(", ")
  );
};

export { getUsers };
