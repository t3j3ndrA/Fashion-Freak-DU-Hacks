import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCartIcon, DotsVerticalIcon } from "@heroicons/react/outline";
const Navbar = () => {
	return (
		<div>
			<nav className="flex justify-around">
				{/* Left Side -  Logo */}
				<div>
					<Link to="/">
						<img
							className="w-12"
							src="https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX35633090.jpg"
						/>
					</Link>
				</div>
				{/* Center - Title */}
				<div className="flex">
					<p className="font-bold text-2xl">Urban Styles</p>
				</div>
				{/* Login and register */}
				<div className="md:hidden">
					<DotsVerticalIcon className="h-8 " />
				</div>
				<div className="hidden  justify-center content-center h-screen md:relative  md:w-auto md:h-auto  md:flex md:gap-2 md:content-center">
					<p>Register</p>
					<p>Sign In</p>
					<ShoppingCartIcon className="h-8" />
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
