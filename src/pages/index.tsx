import Head from 'next/head';
import Header from '../components/Header';

export default function Home() {
	return (
		<>
			<Head>
				<title>Responsive Ecommerce Website Sneakers</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Header />
		</>
	)
}
