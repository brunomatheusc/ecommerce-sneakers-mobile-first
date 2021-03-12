import styled from 'styled-components';

export const Container = styled.h2`
	position: relative;
	font-size: var(--big-font-size);
	margin-bottom: var(--mb-4);
	text-align: center;
	letter-spacing: .1rem;  

	&::after {
		content: '';
		position: absolute;
		width: 56px;
		height: .18rem;
		top: -1rem;
		left: 0;
		right: 0;
		margin: auto;
		background-color: var(--dark-color);
	}
`;
