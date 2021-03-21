import React from 'react';

import { NewContainer, NewMens, NewMensImg, NewTitle, NewPrice, NewSneaker, NewSneakerCard, NewSneakerOverlay, NewSneakerImg } from './styles';
import { BsArrowRight } from 'react-icons/bs';

import new1 from '../../assets/new1.png';
import new2 from '../../assets/new2.png';
import new3 from '../../assets/new3.png';
import new4 from '../../assets/new4.png';
import new5 from '../../assets/new5.png';
import Button from '../Button';
import Section from '../Section';
import SectionTitle from '../SectionTitle';

export default function NewCollection() {
	return (
		<Section id="new">
			<SectionTitle>New Collection</SectionTitle>
			
			<NewContainer className="bd-grid">
				<NewMens>
					<NewMensImg src={new1} />
					<NewTitle>Mens Shoes</NewTitle>
					<NewPrice>From $179.99</NewPrice>
					<Button href="#" type="light">View Collection <BsArrowRight /></Button>
				</NewMens>

				<NewSneaker>
					<NewSneakerCard>
						<NewSneakerImg src={new2} />

						<NewSneakerOverlay>
							<Button href="#">Add to Cart</Button>
						</NewSneakerOverlay>
					</NewSneakerCard>

					<NewSneakerCard>
						<NewSneakerImg src={new3} />

						<NewSneakerOverlay>
							<Button href="#">Add to Cart</Button>
						</NewSneakerOverlay>
					</NewSneakerCard>

					<NewSneakerCard>
						<NewSneakerImg src={new4} />

						<NewSneakerOverlay>
							<Button href="#">Add to Cart</Button>
						</NewSneakerOverlay>
					</NewSneakerCard>

					<NewSneakerCard>
						<NewSneakerImg src={new5} />

						<NewSneakerOverlay>
							<Button href="#">Add to Cart</Button>
						</NewSneakerOverlay>
					</NewSneakerCard>
				</NewSneaker>
			</NewContainer>
		</Section>
	);
}
