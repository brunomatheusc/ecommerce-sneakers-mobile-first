import Head from 'next/head';
import Header from '../components/Header';

import { Main, HomeSection, Container, Sneaker, Data, Shape, HomeImage, New, Title, Description, Button } from '../styles/pages/Home';
import imgHome from '../assets/imghome.png';
import Featured from './components/Featured';
import Collection from './components/Collection';
import WomenSneakers from './components/WomenSneakers';

export default function Home() {
	return (
		<>
			<Head>
				<title>Responsive Ecommerce Website Sneakers</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Header />

			<Main>
				<HomeSection id="home">
					<Container className="bd-grid">
						<Sneaker>
							<Shape />
							<HomeImage src={imgHome} alt=""/>
						</Sneaker>

						<Data>
							<New>New in</New>
							<Title>YEEZY BOOST <br/> SPLY - 350</Title>
							<Description>Explore the new collections of sneakers</Description>
							
							<Button>Explore now</Button>
						</Data>
					</Container>
				</HomeSection>

				<Featured />

				<Collection />

				<WomenSneakers />
			</Main>
		</>
	)
}
