import "dotenv/config";

import express from "express";
import cors from "cors";
import { mainRoutes } from "./main.routes";


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use(mainRoutes)

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
