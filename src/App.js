import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/login";
const App = () => {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
			</Routes>
			<Routes>
				<Route path="/login" element={<Login />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
};

export default App;
