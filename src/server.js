import express from "express";
import cors from "cors";
import router from "../routes/taskRoutes.js";

const app = express();
const PORT = 3001;

app.use(cors({
    origin: "http://localhost:5173",
}));

app.use(express.json());
app.use("/api/tasks", router);

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});