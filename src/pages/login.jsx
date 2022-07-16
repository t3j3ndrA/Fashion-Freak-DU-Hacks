import React from "react";

const Login = () => {
	return (
		<div className="w-screen h-screen flex justify-center  items-center bg-gradient-to-b from-teal-500 to-neutral-800">
			<div className="flex flex-col gap-2 rounded-xl">
				<p className="text-white font-semibold text-6xl my-3">Login</p>
				<input
					type="text"
					placeholder="Username "
					className="outline-none px-1 py-1 w-80 rounded-md"
				/>
				<input
					type="text"
					placeholder="Password "
					className="outline-none px-1 py-1 w-80 rounded-md"
				/>

				<button className="w-80 p-1 bg-white rounded-md font-bold">
					Sign In
				</button>
			</div>
		</div>
	);
};

export default Login;
