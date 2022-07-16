const express = require("express");
const app = require("express")();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
app.use(cors());

// Dotenv Configuration
dotenv.config();

// Middlewares
// To use API in front-end

// To use JSON data
app.use(express.json());

// DB Connection
mongoose
	.connect(process.env.MONGO_URI)
	.then(() => console.log(`DB Connection Successful`))
	.catch((e) => console.log("err >> ", e));

// Server Listening...
const msg = `Service is running on port 5001`;
app.listen(process.env.PORT || 5001, () => console.log(msg));
