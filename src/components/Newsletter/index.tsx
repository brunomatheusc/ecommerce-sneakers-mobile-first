import React from 'react';
import Section from '..//Section';
import { NewsLetterContainer, NewsletterTitle, NewsletterDescription, NewsletterSubscribe, NewsletterInput } from './styles';
import Button from '../Button';

export default function Newsletter() {
	return (
		<Section>
			<NewsLetterContainer className="bd-grid">
				<div>
					<NewsletterTitle>Subscribe And Get <br /> 10% OFF</NewsletterTitle>
					<NewsletterDescription>Get 10% discount for all products</NewsletterDescription>
				</div>

				<NewsletterSubscribe>
					<NewsletterInput placeholder="@email.com" />
					<Button href="#">Subscribe</Button>
				</NewsletterSubscribe>
			</NewsLetterContainer>
		</Section>
	);
}
