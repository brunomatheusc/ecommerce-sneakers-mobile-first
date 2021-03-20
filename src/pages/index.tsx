import Head from 'next/head';
import Header from '../components/Header';

import { Main, HomeSection, Container, Sneaker, Data, Shape, HomeImage, New, Title, Description } from '../styles/pages/Home';
import imgHome from '../assets/imghome.png';
import Featured from './components/Featured';
import Collection from './components/Collection';
import WomenSneakers from './components/WomenSneakers';
import Offer from './components/Offer';
import NewCollection from './components/NewCollection';
import Button from '../components/Button';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import Home from './components/Home';

export default function Index() {
	return (
		<>
			<Head>
				<title>Responsive Ecommerce Website Sneakers</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Header />

			<Main>
				<Home />

				<Featured />

				<Collection />

				<WomenSneakers />

				<Offer />

				<NewCollection />

				<Newsletter />

				<Footer />
			</Main>
		</>
	)
}
