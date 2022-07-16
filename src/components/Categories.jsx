import React from "react";
import { CategoryData } from "../raw_data/categories";
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
		<div className="rounded-sm self-center border-purple-500 border-">
			<img src={item.img} />
		</div>
	);
};

export default Categories;
