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
const productRoute = require("./routers/products");
const cartRoute = require("./routers/cart");
const orderRoute = require("./routers/order");
const checkoutRoute = require("./routers/stripe");
const razorRoute = require("./routers/razor");

// To use JSON data
app.use(express.json());

// Routes
app.use("/api/users", usersRoute);
app.use("/api/auth", authRoute);
app.use("/api/products", productRoute);
app.use("/api/cart", cartRoute);
app.use("/api/orders", orderRoute);
app.use("/api/checkout", checkoutRoute);
app.use("/api/payment", razorRoute);
// DB Connection
mongoose
	.connect(process.env.MONGO_URI)
	.then(() => console.log(`DB Connection Successful`))
	.catch((e) => console.log("err >> ", e));

// Server Listening...
const msg = `Service is running on port 6000`;
app.listen(process.env.PORT || 6000, () => console.log(msg));
