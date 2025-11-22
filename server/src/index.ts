import express from "express";
import type { Request, Response } from "express";
import { DbInitializer } from "./database/init.ts";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", async (req: Request, res: Response) => {
    return res.json((await DbInitializer.create()).response);
});

app.listen(PORT, () => {
  console.log(`✅ Servidor escuchando en http://localhost:${PORT}`);
});