import React from 'react';
import { Container } from './styles';

export default function Section({ children, ...rest }) {
	return (
		<Container {...rest}>{ children }</Container>
	);
}
