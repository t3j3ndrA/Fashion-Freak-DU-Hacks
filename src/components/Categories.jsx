import React from "react";
import { CategoryData } from "../raw_data/categories";
import { Link } from "react-router-dom";
import styled from "styled-components";
const Categories = () => {
	return (
		<div className="flex flex-col justify-center md:flex-row">
			{CategoryData.map((item) => {
				return CategoryView(item);
			})}
		</div>
	);
};

const CategoryView = (item) => {
	return (
		<div className="rounded-sm self-center flex flex-col justify-center items-center border-purple-500 ">
			<img src={item.img} />
			<Link
				to={`/products/${item.category}`}
				className="text-black hover:text-white"
			>
				<button className="text-xl text-center  border-1 bg-teal-700 text-white w-36 rounded-md p-2 mt-2  ">
					Shop Now
				</button>
			</Link>
		</div>
	);
};

export default Categories;

// const Button = styled.button`
// 	margin: 15px auto;
// 	font-size: 1.2rem;
// 	color: white;
// 	background-color: teal;
// 	border: none;
// 	border-radius: 10px;
// 	font-weight: 600;
// 	padding: 4px 8px;
// 	z-index: 1000;
// `;
