import React from "react";

const Register = () => {
	return (
		<div className="w-screen h-screen flex justify-center  items-center bg-gradient-to-b from-teal-500 to-neutral-800">
			<div className="flex flex-col gap-2 rounded-xl">
				<p className="text-white font-semibold text-6xl my-3">Register</p>
				<input
					type="text"
					placeholder="Firstname "
					className="outline-none px-1 py-1 w-80 rounded-md"
				/>
				<input
					type="text"
					placeholder="Lastname "
					className="outline-none px-1 py-1 w-80 rounded-md"
				/>
				<input
					type="text"
					placeholder="Username "
					className="outline-none px-1 py-1 w-80 rounded-md"
				/>
				<input
					type="text"
					placeholder="Email"
					className="outline-none px-1 py-1 w-80 rounded-md"
				/>

				<button className="w-80 p-1 bg-emerald-700 text-white rounded-md font-bold border-white border-0">
					Sign Up
				</button>
			</div>
		</div>
	);
};

export default Register;
