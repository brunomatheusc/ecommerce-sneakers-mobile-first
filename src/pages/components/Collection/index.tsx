import React from 'react';
import { BsArrowRight } from 'react-icons/bs';

import { CollectionSection, CollectionContainer, CollectionCard, CollectionData, CollectionName, ColectionDescription, CollectionImage } from './styles';

import collection1 from '../../../assets/collection1.png';
import collection2 from '../../../assets/collection1.png';
import Button from '../../../components/Button';

export default function Collection() {
	return (
		<CollectionSection className="section">
			<CollectionContainer className="bd-grid">
				<CollectionCard>
					<CollectionData>
						<CollectionName>Nike</CollectionName>
						<ColectionDescription>New collection 2020</ColectionDescription>
						<Button href="#" type="light">Buy now <BsArrowRight /></Button>
					</CollectionData>

					<CollectionImage src={collection1} />
				</CollectionCard>

				<CollectionCard>
					<CollectionData>
						<CollectionName>Nike</CollectionName>
						<ColectionDescription>New collection 2020</ColectionDescription>
						<Button href="#" type="light">Buy now <BsArrowRight /></Button>
					</CollectionData>

					<CollectionImage src={collection2} />
				</CollectionCard>
			</CollectionContainer>			
		</CollectionSection>
	);
}
