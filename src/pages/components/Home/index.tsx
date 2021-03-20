import React from 'react'
import imgHome from '../../../assets/imghome.png';

import { HomeSection, HomeContainer, HomeSneaker, HomeShape, HomeImage, HomeData, HomeNew, HomeTitle, HomeDescription, Button } from './styles';

export default function Home() {
	return (
		<HomeSection id="home">
			<HomeContainer className="bd-grid">
				<HomeSneaker>
					<HomeShape />
					<HomeImage src={imgHome} alt=""/>
				</HomeSneaker>

				<HomeData>
					<HomeNew>New in</HomeNew>
					<HomeTitle>YEEZY BOOST <br/> SPLY - 350</HomeTitle>
					<HomeDescription>Explore the new collections of sneakers</HomeDescription>
					
					<Button href="#">Explore now</Button>
				</HomeData>
			</HomeContainer>
		</HomeSection>
	);
}
