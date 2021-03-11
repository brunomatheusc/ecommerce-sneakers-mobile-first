import React from 'react';
import Link from 'next/link';

import { WomenSection, WomenTitle, WomenContainer, WomenSneaker, WomenImg, WomenName, WomenPrice } from './styles';

import women1 from '../../../assets/women1.png';
import women2 from '../../../assets/women2.png';
import women3 from '../../../assets/women3.png';
import women4 from '../../../assets/women4.png';

export default function WomenSneakers() {
	return (
		<WomenSection className="section">
			<WomenTitle className="section-title">WOMEN SNEAKERS</WomenTitle>

			<WomenContainer className="bd-grid">
				<WomenSneaker>
					<WomenImg src={women1} />
					<WomenName>Nike Free TR</WomenName>
					<WomenPrice>$129.99</WomenPrice>
					<Link href="#">Add to Cart</Link>
				</WomenSneaker>

				<WomenSneaker>
					<WomenImg src={women2} />
					<WomenName>Nike Free TR</WomenName>
					<WomenPrice>$129.99</WomenPrice>
					<Link href="#">Add to Cart</Link>
				</WomenSneaker>

				<WomenSneaker>
					<WomenImg src={women3} />
					<WomenName>Nike GS Pink</WomenName>
					<WomenPrice>$129.99</WomenPrice>
					<Link href="#">Add to Cart</Link>
				</WomenSneaker>

				<WomenSneaker>
					<WomenImg src={women4} />
					<WomenName>Nike Get 5</WomenName>
					<WomenPrice>$129.99</WomenPrice>
					<Link href="#">Add to Cart</Link>
				</WomenSneaker>
			</WomenContainer>
		</WomenSection>
	);
}
