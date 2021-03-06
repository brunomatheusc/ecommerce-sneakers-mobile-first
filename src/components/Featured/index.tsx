import React from 'react';
import { FeaturedSection, Title, FeaturedContainer, Sneaker, SneakerSale, SneakerImg, SneakerName, SneakerPrice } from './styles';
import { BsArrowRight } from 'react-icons/bs';

import featured1 from "../../assets/featured1.png";
import featured2 from "../../assets/featured2.png";
import featured3 from "../../assets/featured3.png";
import Button from '../Button';

export default function Featured() {
	return (
		<FeaturedSection className="section" id="featured">
			<Title className="section-title">FEATURED</Title>

			<FeaturedContainer className="bd-grid">
				<Sneaker>
					<SneakerSale>Sale</SneakerSale>
					<SneakerImg src={featured1} />
					<SneakerName>Nike Jordan</SneakerName>
					<SneakerPrice>$149.99</SneakerPrice>
					<Button href="#" type="light">Add to Cart <BsArrowRight /></Button>
				</Sneaker>

				<Sneaker>
					<SneakerSale>Sale</SneakerSale>
					<SneakerImg src={featured2} />
					<SneakerName>Nike Free RN</SneakerName>
					<SneakerPrice>$149.99</SneakerPrice>
					<Button href="#" type="light">Add to Cart <BsArrowRight /></Button>
				</Sneaker>

				<Sneaker>
					<SneakerSale>Sale</SneakerSale>
					<SneakerImg src={featured3} />
					<SneakerName>Nike Free RN</SneakerName>
					<SneakerPrice>$149.99</SneakerPrice>
					<Button href="#" type="light">Add to Cart <BsArrowRight /></Button>
				</Sneaker>
			</FeaturedContainer>
		</FeaturedSection>
	);
}
