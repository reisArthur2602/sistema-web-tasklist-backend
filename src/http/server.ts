import "express-async-errors";
import "dotenv/config";

import express from "express";
import cors from "cors";
import { mainRoutes } from "./main.routes";
import { ErrorMiddlware } from "./middlewares/error.middleware";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use(mainRoutes);
app.use(ErrorMiddlware);

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Server running on PORT ${PORT} 🚀`));
