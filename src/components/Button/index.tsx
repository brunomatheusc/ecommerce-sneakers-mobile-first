import React, { FC } from 'react';
import Link from 'next/link';
import { Container } from './styles';

interface IProps {
	type?: 'normal' | 'light';
	href: string;
}

const Button: FC<IProps> = ({ children, type = 'normal', href, ...rest }) => {
	return (
		<Link href={href}>
			<Container { ...rest } type={ type }>{ children }</Container>
		</Link>
	);
};

export default Button;