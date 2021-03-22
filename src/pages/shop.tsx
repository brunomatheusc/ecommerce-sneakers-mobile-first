import React from 'react';
import styled from 'styled-components';
import Footer from '../components/Footer';
import Header from '../components/Header';
import AllProducts from '../components/pages/Shop/AllProducts';

const Main = styled.main``;

export default function Shop() {
	return (
		<>
			<Header />

			<Main>
				<AllProducts />

				<Footer />
			</Main>
		</>
	);
}
