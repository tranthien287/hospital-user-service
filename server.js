require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();
app.use(cors());
app.use(express.json());

// Routes
const userRoutes = require("./routes/userRoutes");
app.use("/api/users", userRoutes);

// DB + Server
connectDB();
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`User Service running on port ${PORT}`));
