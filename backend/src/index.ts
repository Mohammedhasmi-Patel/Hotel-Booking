import express, { Request, Response } from "express";
import cors from "cors";
import conn from "./config/db";

conn();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.listen(8080, () => {
  console.log("Server running on port 8080");
});
