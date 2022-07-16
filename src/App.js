import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
			</Routes>
			<Routes>
				<Route path="/login" element={<Login />} />
			</Routes>
			<Routes>
				<Route path="/register" element={<Register />} />
			</Routes>
			<Routes>
				<Route path="/cart" element={<Cart />} />
			</Routes>
			{/* <Footer /> */}
		</BrowserRouter>
	);
};

export default App;
