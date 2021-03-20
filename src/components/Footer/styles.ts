import styled from 'styled-components';

export const Container = styled.div`
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)) !important;  
`;

export const FooterBox = styled.div`
    margin-bottom: var(--mb-4);

	svg {
		font-size: 1.5rem;
		margin-right: 1.25rem;			
	}
`; 

export const FooterTitle = styled.h3`
    font-size: var(--big-font-size);
`; 

export const FooterDescription = styled.p`

`; 

export const FooterLink = styled.li`
	a {
		display: block;
		width: max-content;
		margin-bottom: var(--mb-1);
	}
`;

export const FooterCopy = styled.p`
    padding-top: 3rem;
    font-size: var(--smalle-font-size);
    color: var(--dark-color);
    text-align: center;
`;