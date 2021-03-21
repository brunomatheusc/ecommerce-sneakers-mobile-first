import React from 'react'
import Button from '../../../Button';
import { FeaturedContainer, FeaturedSection, Sneaker, SneakerImg, SneakerName, SneakerPrice } from '../../../Featured/styles';
import SectionTitle from '../../../SectionTitle';
import Pages from '../SneakerPages';

import featured1 from '../../../../assets/featured1.png';
import featured2 from '../../../../assets/featured2.png';
import featured3 from '../../../../assets/featured3.png';
import new2 from '../../../../assets/new2.png';
import new3 from '../../../../assets/new3.png';
import new4 from '../../../../assets/new4.png';
import new5 from '../../../../assets/new5.png';
import women1 from '../../../../assets/women1.png';

export default function AllProducts() {
	return (
		<FeaturedSection className="section">
			<SectionTitle>All Products</SectionTitle>

			<FeaturedContainer className="bd-grid">
				<Sneaker>
					<SneakerImg src={featured1} />
					<SneakerName>Nike Jordan</SneakerName>
					<SneakerPrice>$149.99</SneakerPrice>
					<Button href="#" type="light">Add to Cart</Button>
				</Sneaker>

				<Sneaker>
					<SneakerImg src={featured2} />
					<SneakerName>Nike Free RN</SneakerName>
					<SneakerPrice>$179.99</SneakerPrice>
					<Button href="#" type="light">Add to Cart</Button>
				</Sneaker>
				
				<Sneaker>
					<SneakerImg src={featured3} />
					<SneakerName>Nike Free RN</SneakerName>
					<SneakerPrice>$179.99</SneakerPrice>
					<Button href="#" type="light">Add to Cart</Button>
				</Sneaker>

				<Sneaker>
					<SneakerImg src={new2} />
					<SneakerName>Nike Jordan</SneakerName>
					<SneakerPrice>$149.99</SneakerPrice>
					<Button href="#" type="light">Add to Cart</Button>
				</Sneaker>

				<Sneaker>
					<SneakerImg src={new3} />
					<SneakerName>Nike Jordan</SneakerName>
					<SneakerPrice>$149.99</SneakerPrice>
					<Button href="#" type="light">Add to Cart</Button>
				</Sneaker>

				<Sneaker>
					<SneakerImg src={new4} />
					<SneakerName>Nike Jordan</SneakerName>
					<SneakerPrice>$149.99</SneakerPrice>
					<Button href="#" type="light">Add to Cart</Button>
				</Sneaker>

				<Sneaker>
					<SneakerImg src={new5} />
					<SneakerName>Nike Jordan</SneakerName>
					<SneakerPrice>$149.99</SneakerPrice>
					<Button href="#" type="light">Add to Cart</Button>
				</Sneaker>

				<Sneaker>
					<SneakerImg src={women1} />
					<SneakerName>Nike Jordan</SneakerName>
					<SneakerPrice>$149.99</SneakerPrice>
					<Button href="#" type="light">Add to Cart</Button>
				</Sneaker>
			</FeaturedContainer>

			<Pages />
		</FeaturedSection>
	);
}
