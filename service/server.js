import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import connection_database from "./db/conn.js";
import router from "./router/index.js";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use('/uploads', express.static(path.join(__dirname, '/uploads')));

app.use(router);

app.listen(PORT, async () => {
  try {
    await connection_database();
    console.log(`Server running at http://localhost:${PORT}/`);
  } catch (error) {
    console.error("Database connection failed:", error.message);
    process.exit(1);
  }
});
