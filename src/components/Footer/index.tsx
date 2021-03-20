import React from 'react';
import Link from 'next/link';
import Section from '../Section';
import { Container, FooterBox, FooterTitle, FooterDescription, FooterLink, FooterCopy } from './styles';
import { GrFacebook, GrInstagram, GrTwitter, GrGoogle } from 'react-icons/gr';

export default function Footer() {
	return (		
		<Section>
			<Container className="bd-grid">
				<FooterBox>
					<FooterTitle>Roby</FooterTitle>
					<FooterDescription>New collection of shoes 2021.</FooterDescription>
				</FooterBox>

				<FooterBox>
					<FooterTitle>EXPLORE</FooterTitle>

					<ul>
						<FooterLink><Link href="#home">Home</Link></FooterLink>
						<FooterLink><Link href="#featured">Featured</Link></FooterLink>
						<FooterLink><Link href="#women">Women</Link></FooterLink>
						<FooterLink><Link href="#new">New</Link></FooterLink>
					</ul>
				</FooterBox>			

				<FooterBox>
					<FooterTitle>SUPPORT</FooterTitle>

					<ul>
						<FooterLink><Link href="#">Product Help</Link></FooterLink>
						<FooterLink><Link href="#">Customer Care</Link></FooterLink>
						<FooterLink><Link href="#">Authorized service</Link></FooterLink>
					</ul>
				</FooterBox>

				<FooterBox>
					<Link href="#"><GrFacebook /></Link>
					<Link href="#"><GrInstagram /></Link>
					<Link href="#"><GrTwitter /></Link>
					<Link href="#"><GrGoogle /></Link>
				</FooterBox>
			</Container>

			
			<FooterCopy>&#169; 2020 Bedimcode. All right reserved</FooterCopy>
		</Section>
	);
}
