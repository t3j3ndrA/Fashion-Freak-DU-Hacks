import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCartIcon, DotsVerticalIcon } from "@heroicons/react/outline";
import { updateUser, logoutUser } from "../redux/userSlice";
import { useSelector, useDispatch } from "react-redux";
import { setNotiError } from "../redux/notificationSlice";
import { makeCartEmpty } from "../redux/cartSlice";
import {
	Search,
	ShoppingCartOutlined,
	CloseOutlined,
} from "@mui/icons-material";
import Badge from "@mui/material/Badge";

const Navbar = () => {
	const cartProductsCount = useSelector((states) => states.cart.quantity);
	const [navbarToggler, setNavbarToggler] = useState(false);
	const { id, token, isLoggedIn, userName } = useSelector(
		(state) => state.user
	);
	const dispatch = useDispatch();
	const handleLogOut = () => {
		dispatch(logoutUser());
		dispatch(makeCartEmpty());
	};

	const handleCartClick = () => {
		if (!isLoggedIn) {
			dispatch(setNotiError({ msg: "Please login to continue" }));
		}
	};

	return (
		<div className="mb-12 md:mb-16">
			<nav className="w-full bg-white z-10 flex justify-around items-center fixed top-0 shadow-md">
				<div>
					<Link to="/">
						<img
							className="w-12"
							src="https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX35633090.jpg"
						/>
					</Link>
				</div>
				<div className="flex items-center text-teal-700 text-2xl">
					<p className="font-bold text-2xl">Urban Styles</p>
				</div>
				<div
					className="md:hidden items-center cursor-pointer"
					onClick={() => setNavbarToggler(!navbarToggler)}
				>
					<DotsVerticalIcon className="h-7 " />
				</div>

				{/* Mobile navigation menu */}
				{/* <div className="absolute top-0 bg-teal-200 w-full h-20 md:hidden">

				</div>
				 */}
				<div
					className={`ease-in-out duration-500  absolute ${
						navbarToggler ? "left-0" : "-left-full"
					} top-0 flex flex-col gap-2 bg-teal-100 w-full h-screen justify-center items-center md:top-0 md:left-0 md:flex-row md:block md:justify-center md:content-center md:h-auto md:bg-transparent md:relative  md:w-auto md:h-auto  md:flex md:gap-2 md:content-center`}
				>
					<CloseOutlined
						className=" cursor-pointer self-end items-start mr-10 mb-10 text-red-500 md:opacity-0"
						onClick={() => {
							setNavbarToggler(!navbarToggler);
						}}
					/>
					{!isLoggedIn && (
						<Link
							to="/register"
							style={{ textDecoration: "none", color: "inherit" }}
						>
							<p className="cursor-pointer">Register</p>
						</Link>
					)}
					{!isLoggedIn && (
						<Link
							to="/login"
							style={{ textDecoration: "none", color: "inherit" }}
						>
							<p className="cursor-pointer">Login</p>
						</Link>
					)}
					{isLoggedIn && <p>{userName}</p>}
					{isLoggedIn && <p onClick={handleLogOut}>Logout</p>}
					<Link to={isLoggedIn ? "/cart" : "/login"}>
						<Badge badgeContent={cartProductsCount} color="primary" max={9}>
							<ShoppingCartOutlined styled={{ color: "teal" }} />
						</Badge>
					</Link>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
