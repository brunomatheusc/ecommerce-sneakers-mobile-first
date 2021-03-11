import React from 'react';
import Link from 'next/link';

import { CollectionSection, CollectionContainer, CollectionCard, CollectionData, CollectionName, ColectionDescription, CollectionImage } from './styles';

import collection1 from '../../../assets/collection1.png';
import collection2 from '../../../assets/collection1.png';

export default function Collection() {
	return (
		<CollectionSection className="section">
			<CollectionContainer className="bd-grid">
				<CollectionCard>
					<CollectionData>
						<CollectionName>Nike</CollectionName>
						<ColectionDescription>New collection 2020</ColectionDescription>
						<Link href="#">Buy now</Link>
					</CollectionData>

					<CollectionImage src={collection1} />
				</CollectionCard>

				<CollectionCard>
					<CollectionData>
						<CollectionName>Nike</CollectionName>
						<ColectionDescription>New collection 2020</ColectionDescription>
						<Link href="#">Buy now</Link>
					</CollectionData>

					<CollectionImage src={collection2} />
				</CollectionCard>
			</CollectionContainer>			
		</CollectionSection>
	);
}
