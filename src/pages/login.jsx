import React, { useState, useEffect } from "react";
import BackImg from "../assets/01.jpg";
import { setNotiError, setNotiSuccess } from "../redux/notificationSlice";
import { updateUser, logoutUser } from "../redux/userSlice";
import { useDispatch, useSelector } from "react-redux";
import API from "../axios/instance";
import { Link, useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";

const Login = () => {
	const dispatch = useDispatch();
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	let navigate = useNavigate();

	const handleLogin = async () => {
		setIsLoading(true);
		if (!username) {
			dispatch(setNotiError({ msg: "Username cannot be empty!" }));
			setIsLoading(false);
			return;
		}
		if (!password) {
			dispatch(setNotiError({ msg: "Password cannot be empty!" }));
			setIsLoading(false);
			return;
		}

		try {
			const data = { username, password };
			const res = await API.post("/auth/login", data);
			console.log("User data : ", res.data);
			if (res.data.success) {
				dispatch(setNotiSuccess({ msg: res.data.msg }));
				dispatch(updateUser(res.data.data));
				navigate("/");
			} else {
				dispatch(setNotiError({ msg: res.data.msg }));
			}
		} catch (err) {}
		setIsLoading(false);
	};
	return (
		<div className="w-screen h-screen flex justify-center  items-center bg-gradient-to-b from-teal-500 to-neutral-800">
			<div className="flex flex-col gap-2 rounded-xl">
				<p className="text-white font-semibold text-6xl my-3">Login</p>
				<input
					type="text"
					placeholder="Username "
					onChange={(e) => setUsername(e.target.value)}
					className="outline-none px-1 py-1 w-80 rounded-md"
				/>
				<input
					type="text"
					placeholder="Password "
					className="outline-none px-1 py-1 w-80 rounded-md"
					onChange={(e) => setPassword(e.target.value)}
				/>

				<button
					className="w-80 p-1 bg-white rounded-md font-bold"
					onClick={handleLogin}
					disabled={isLoading}
				>
					{!isLoading && "Log in"}
					{isLoading && <ClipLoader color="white" size={20} />}
				</button>
			</div>
		</div>
	);
};

export default Login;
