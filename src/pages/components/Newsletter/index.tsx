import React from 'react';
import Section from '../../../components/Section';
import Link from 'next/link';
import { Container, NewsletterTitle, NewsletterDescription, NewsletterSubscribe, NewsletterInput } from './styles';
import Button from '../../../components/Button';

export default function Newsletter() {
	return (
		<Section>
			<Container className="bd-grid">
				<div>
					<NewsletterTitle>Subscribe And Get <br /> 10% OFF</NewsletterTitle>
					<NewsletterDescription>Get 10% discount for all products</NewsletterDescription>
				</div>

				<NewsletterSubscribe>
					<NewsletterInput placeholder="@email.com" />
					<Button href="#">Subscribe</Button>
				</NewsletterSubscribe>
			</Container>
		</Section>
	);
}
