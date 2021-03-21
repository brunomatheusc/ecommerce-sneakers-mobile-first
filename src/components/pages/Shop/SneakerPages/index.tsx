import React from 'react';
import { SneakerPages, SneakerPag } from './styles';

export default function Pages() {
	return (
		<SneakerPages className="bd-grid">
			<div>
				<SneakerPag>1</SneakerPag>
				<SneakerPag>2</SneakerPag>
				<SneakerPag>3</SneakerPag>
				<SneakerPag>4</SneakerPag>
				<SneakerPag>&#8594;</SneakerPag>			
			</div>
		</SneakerPages>
	);
}
