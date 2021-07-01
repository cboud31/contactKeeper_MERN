const express = require("express");
const connectDB = require("./config/db");

const server = express();

//Connect to database
connectDB();

server.get("/", (req, res) =>
  res.json({ message: `Welcome to the Contact Keeper API!` })
);

// Define & Mount API Routes
server.use("/api/users", require("./routes/users"));
server.use("/api/contacts", require("./routes/contacts"));
server.use("/api/auth", require("./routes/auth"));

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
