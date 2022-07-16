import React from "react";

const Footer = () => {
	return (
		<div className="flex flex-col justify-center py-20  w-screen bg-neutral-800 text-white md:flex-row md:justify-around md:content-center">
			<div className="flex mx-16 pt-4 flex-col">
				<p className="text-3xl font-extrabold"> Address</p>
				<p className=" pt-2">
					405 Tulip, Blossom Aura, Near Canal, Nadiad, Gujarat.
				</p>
			</div>

			<div className="flex mx-16 pt-4 flex-col gap-1.5">
				<p className="text-3xl font-extrabold">Contact Us</p>
				<input
					type="text"
					placeholder="Name"
					className="bg-neutral-800 w-80 rounded-md px-1 py-1 outline-none text-white border-2 border-white "
				/>
				<input
					type="text"
					placeholder="E-mail"
					className="bg-neutral-800 w-80 rounded-md px-1 py-1 outline-none text-white border-2 border-white "
				/>
				<input
					type="text"
					placeholder="Phone"
					className="bg-neutral-800 w-80 rounded-md px-1 py-1 outline-none text-white border-2 border-white "
				/>
				<textarea
					type="text"
					placeholder="Type your message here..."
					className="h-20 bg-neutral-800 w-80 rounded-md px-1 py-1 outline-none text-white border-2 border-white "
				/>
				<button className="w-80 bg-white rounded-md px-1 py-1 text-neutral-800 font-semibold text-xl">
					Submit
				</button>
			</div>

			<div className="flex mx-16 pt-4 flex-col gap-1.5 md:hidden lg:block">
				<p className="text-3xl font-extrabold">Stay In touch</p>
				<input
					type="text"
					placeholder="Email or Phone number"
					className="bg-neutral-800 w-80 rounded-md px-1 py-1 outline-none text-white border-2 border-white "
				/>
				<button className="w-80 bg-white rounded-md px-1 py-1 text-neutral-800 font-semibold text-xl">
					Subscribe Now
				</button>
			</div>

			{/* <div className="flex mx-16 pt-4 flex-col gap-1.5">
				<p className="">2022 by Urban Styles</p>
			</div> */}
		</div>
	);
};

export default Footer;
