import React from 'react';
import { BsArrowRight } from 'react-icons/bs';

import { WomenSection, WomenTitle, WomenContainer, WomenSneaker, WomenImg, WomenName, WomenPrice } from './styles';

import women1 from '../../assets/women1.png';
import women2 from '../../assets/women2.png';
import women3 from '../../assets/women3.png';
import women4 from '../../assets/women4.png';
import Button from '../Button';

export default function WomenSneakers() {
	return (
		<WomenSection className="section" id="women">
			<WomenTitle className="section-title">WOMEN SNEAKERS</WomenTitle>

			<WomenContainer className="bd-grid">
				<WomenSneaker>
					<WomenImg src={women1} />
					<WomenName>Nike Free TR</WomenName>
					<WomenPrice>$129.99</WomenPrice>
					<Button href="#" type="light">Add to Cart <BsArrowRight /></Button>
				</WomenSneaker>

				<WomenSneaker>
					<WomenImg src={women2} />
					<WomenName>Nike Free TR</WomenName>
					<WomenPrice>$129.99</WomenPrice>
					<Button href="#" type="light">Add to Cart <BsArrowRight /></Button>
				</WomenSneaker>

				<WomenSneaker>
					<WomenImg src={women3} />
					<WomenName>Nike GS Pink</WomenName>
					<WomenPrice>$129.99</WomenPrice>
					<Button href="#" type="light">Add to Cart <BsArrowRight /></Button>
				</WomenSneaker>

				<WomenSneaker>
					<WomenImg src={women4} />
					<WomenName>Nike Get 5</WomenName>
					<WomenPrice>$129.99</WomenPrice>
					<Button href="#" type="light">Add to Cart <BsArrowRight /></Button>
				</WomenSneaker>
			</WomenContainer>
		</WomenSection>
	);
}
