import styled, { css } from 'styled-components';

export const Container = styled.a<{ type: string }>`
	display: flex;

	${({ type }) => type == 'normal' && css`
		background-color: var(--dark-color);
		color: var(--white-color);
		padding: 1.125rem 2rem;
		font-weight: var(--font-medium);
		border-radius: .5rem;
		transition: .3s;	

		&:hover {
			transform: translateY(-.25rem);
		}  
	`};

	${({ type }) => type == 'light' && css`
		color: var(--dark-color);
		font-weight: var(--font-bold);
		align-items: center;

		&:hover {
			transform: translateX(.25rem);
		}
	`};

	svg {
		font-size: 1.25rem;
		margin-left: var(--mb-1);
		transition: .3s;
	}
`;
