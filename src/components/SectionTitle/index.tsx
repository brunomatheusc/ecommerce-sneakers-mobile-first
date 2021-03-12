import React from 'react';
import { Container } from './styles';

export default function SectionTitle({ children, ...rest }) {
	return (
		<Container {...rest}>{ children }</Container>
	);
}
