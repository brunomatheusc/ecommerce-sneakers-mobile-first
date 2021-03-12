import React from 'react';
import Link from 'next/link';

import { NewContainer, NewMens, NewMensImg, NewTitle, NewPrice, NewSneaker, NewSneakerCard, NewSneakerOverlay, NewSneakerImg } from './styles';

import new1 from '../../../assets/new1.png';
import new2 from '../../../assets/new2.png';
import new3 from '../../../assets/new3.png';
import new4 from '../../../assets/new4.png';
import new5 from '../../../assets/new5.png';

export default function NewCollection() {
	return (
		<section className="new section">
			<NewContainer className="bd-grid">
				<NewMens>
					<NewMensImg src={new1} />
					<NewTitle>Mens Shoes</NewTitle>
					<NewPrice>From 179.99</NewPrice>
					<Link href="#">View Collection</Link>
				</NewMens>

				<NewSneaker>
					<NewSneakerCard>
						<NewSneakerImg src={new2} />
						<NewSneakerOverlay></NewSneakerOverlay>
						<Link href="#">Add to Cart</Link>
					</NewSneakerCard>

					<NewSneakerCard>
						<NewSneakerImg src={new3} />
						<NewSneakerOverlay></NewSneakerOverlay>
						<Link href="#">Add to Cart</Link>
					</NewSneakerCard>

					<NewSneakerCard>
						<NewSneakerImg src={new4} />
						<NewSneakerOverlay></NewSneakerOverlay>
						<Link href="#">Add to Cart</Link>
					</NewSneakerCard>

					<NewSneakerCard>
						<NewSneakerImg src={new5} />
						<NewSneakerOverlay></NewSneakerOverlay>
						<Link href="#">Add to Cart</Link>
					</NewSneakerCard>
				</NewSneaker>
			</NewContainer>
		</section>
	);
}
