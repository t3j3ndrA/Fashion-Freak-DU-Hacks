const express = require("express");
const app = require("express")();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
app.use(cors());

// Dotenv Configuration
dotenv.config();

// Routes importing
const usersRoute = require("./routers/users");
const authRoute = require("./routers/auth");

// To use JSON data
app.use(express.json());

// Routes
app.use("/api/users", usersRoute);
app.use("/api/auth", authRoute);

// DB Connection
mongoose
	.connect(process.env.MONGO_URI)
	.then(() => console.log(`DB Connection Successful`))
	.catch((e) => console.log("err >> ", e));

// Server Listening...
const msg = `Service is running on port 5001`;
app.listen(process.env.PORT || 5001, () => console.log(msg));
