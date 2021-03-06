import React from "react";
import Announcement from "../components/Announcement";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import Sliders from "../components/Sliders";
import TrendingProducts from "../components/TrendingProducts";
const Home = () => {
	return (
		<div>
			<Navbar />
			<Announcement />

			<div className="mt-2"></div>
			<Sliders />
			<p className="my-3 text-center font-semibold text-4xl md:text-5xl ">
				Popular Categories
			</p>
			<Categories />
			<p className="my-3 text-center font-semibold text-4xl md:text-5xl ">
				Trending Products
			</p>
			<Products />
			<Footer />
		</div>
	);
};

export default Home;
