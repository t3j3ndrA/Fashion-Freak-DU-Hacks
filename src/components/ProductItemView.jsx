import {
	AddShoppingCartOutlined,
	FavoriteBorderOutlined,
	SearchOutlined,
} from "@mui/icons-material";

import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ProductItemView = ({ item }) => {
	return (
		<Container>
			<ImgContainer>
				<Img src={item.img}></Img>
			</ImgContainer>
			<IconsContainer>
				<Icon>
					<AddShoppingCartOutlined />
				</Icon>
				<Icon>
					<FavoriteBorderOutlined />
				</Icon>
				<Link to={`/product/${item._id}`}>
					<Icon>
						<SearchOutlined />
					</Icon>
				</Link>
			</IconsContainer>
			<ProductTitle>{item.title}</ProductTitle>
		</Container>
	);
};

const IconsContainer = styled.div`
	position: absolute;
	border-radius: 12px;
	display: flex;
	gap: 8px;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	align-items: center;
	justify-content: center;
	transition: all 0.5s ease;
	opacity: 0;
`;

const Container = styled.div`
	position: relative;
	box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
	margin: 15px 15px;
	border-radius: 12px;
	/* border: 1px solid blue; */
	padding: 10px 5px;
	&:hover ${IconsContainer} {
		background-color: #0000006e;
		opacity: 1;
	}

	@media screen and (min-width: 768px) {
		width: 250px;
	}
	background-color: #f3f3f3;
`;
const ImgContainer = styled.div`
	width: 100%;

	height: 55vh;
`;
const Img = styled.img`
	width: 100%;
	height: 100%;
	border-radius: 12px;
	object-fit: cover;
	object-position: top;
	&:hover {
		scale: 1.2;
	}
`;

const Icon = styled.div`
	border-radius: 50%;
	padding: 16px;
	background-color: white;
	cursor: pointer;
	transition: all 0.4s ease;
	&:hover {
		transform: scale(1.1);
	}
`;

const ProductTitle = styled.p`
	text-align: center;
	font-size: 1.3rem;
	margin: 5px auto;
`;

export default ProductItemView;
