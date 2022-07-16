import React from "react";
import { productData } from "../raw_data/product_data";
const PopularProducts = () => {
	return (
		<>
			<div className=" flex flex-col justify-center md:flex-row gap-3 md:gap-1 md:flex-wrap flex-grow  mx-5 my-4 ">
				{productData.map((item) => {
					return productView(item);
				})}
			</div>
		</>
	);
};

const productView = (item) => {
	return (
		<div className="rounded-xl self-center shadow-md shadow-slate-400  px-2 py-4  hover:scale-105 duration-200 ease-in md:w-52 lg:w-64 ">
			<img src={item.img} className="rounded-3xl" alt="" />
			<p className="text-xl text-center font-semibold">{item.title}</p>
		</div>
	);
};

export default PopularProducts;
