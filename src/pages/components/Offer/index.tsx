import React from 'react';
import Link from 'next/link';
import { OfferSection, OfferContainer, OfferData, OfferTitle, OfferDescription, OfferImg } from './styles';

import offerImg from '../../../assets/offert.png';

export default function Offer() {
	return (
		<OfferSection className="section">
			<OfferContainer className="bd-grid">
				<OfferData>
					<OfferTitle>50% OFF</OfferTitle>
					<OfferDescription>In Adidas Superstar sneakers</OfferDescription>
					<Link href="#">Shop Now</Link>
				</OfferData>

				<OfferImg src={offerImg} />
			</OfferContainer>
		</OfferSection>
	);
}
