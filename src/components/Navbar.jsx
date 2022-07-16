import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCartIcon, DotsVerticalIcon } from "@heroicons/react/outline";
import { updateUser, logoutUser } from "../redux/userSlice";
import { useSelector, useDispatch } from "react-redux";
import { setNotiError } from "../redux/notificationSlice";
import { makeCartEmpty } from "../redux/cartSlice";
import { Search, ShoppingCartOutlined } from "@mui/icons-material";
import Badge from "@mui/material/Badge";

const Navbar = () => {
	const cartProductsCount = useSelector((states) => states.cart.quantity);
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
		<div>
			<nav className="flex justify-around items-center">
				<div>
					<Link to="/">
						<img
							className="w-12"
							src="https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX35633090.jpg"
						/>
					</Link>
				</div>
				<div className="flex items-center">
					<p className="font-bold text-2xl">Urban Styles</p>
				</div>
				<div className="md:hidden items-center">
					<DotsVerticalIcon className="h-8 " />
				</div>
				<div className="hidden  justify-center content-center h-screen md:relative  md:w-auto md:h-auto  md:flex md:gap-2 md:content-center">
					{!isLoggedIn && (
						<Link
							to="/register"
							style={{ textDecoration: "none", color: "inherit" }}
						>
							<p>Register</p>
						</Link>
					)}
					{!isLoggedIn && (
						<Link
							to="/login"
							style={{ textDecoration: "none", color: "inherit" }}
						>
							<p>Login</p>
						</Link>
					)}
					{isLoggedIn && <p>{userName}</p>}
					{isLoggedIn && <p onClick={handleLogOut}>Logout</p>}
					{/* <Link to="/register">
						<p>Register</p>
					</Link>
					<Link to="/login">
						<p>Sign In</p>
					</Link> */}
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
