import styled from 'styled-components';

export const SneakerPages = styled.div`
    margin-top: var(--mb-6);
`;

export const SneakerPag = styled.span`
    padding: .5rem 1rem;
    border: 1px solid var(--dark-color);

	&:hover {
		background-color: var(--dark-color);
    	color: var(--white-color);		
	}

	& + & {
		margin-left: 5px;
	}
`;