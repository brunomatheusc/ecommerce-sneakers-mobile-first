import React from 'react';
import { OfferSection, OfferContainer, OfferData, OfferTitle, OfferDescription, OfferImg } from './styles';

import offerImg from '../../../assets/offert.png';
import Button from '../../../components/Button';

export default function Offer() {
	return (
		<OfferSection className="section">
			<OfferContainer className="bd-grid">
				<OfferData>
					<OfferTitle>50% OFF</OfferTitle>
					<OfferDescription>In Adidas Superstar sneakers</OfferDescription>
					<Button href="#" type="normal">Shop Now</Button>
				</OfferData>

				<OfferImg src={offerImg} />
			</OfferContainer>
		</OfferSection>
	);
}
