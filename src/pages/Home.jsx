import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import Announcement from "../components/Announcement";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Sliders from "../components/Sliders";

const Home = () => {
	return (
		<div>
			<Announcement />
			<div className="mt-2"></div>
			<Sliders />
			<p className="my-3 text-center font-semibold text-4xl md:text-5xl ">
				Popular Categories
			</p>
			<Categories />
			<Footer />
		</div>
	);
};

export default Home;
