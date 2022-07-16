import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import AllProducts from "./pages/AllProducts";
import SingleProduct from "./pages/SingleProduct";
import Notification from "./components/Notification";
const App = () => {
	return (
		<BrowserRouter>
			<Notification />
			<Routes>
				<Route path="/" element={<Home />} />

				<Route path="/login" element={<Login />} />

				<Route path="/register" element={<Register />} />

				<Route path="/cart" element={<Cart />} />

				<Route path="/products/:category" element={<AllProducts />} />

				<Route path="/product/:id" element={<SingleProduct />} />
			</Routes>
			{/* <Footer /> */}
		</BrowserRouter>
	);
};

export default App;
