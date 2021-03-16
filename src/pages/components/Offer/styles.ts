import styled from 'styled-components';

export const OfferSection = styled.section``;

export const OfferContainer = styled.div`
    grid-template-columns: 55% 45%;
    column-gap: 0;
    background-color: var(--dark-color-lighten);
    border-radius: .5rem;
    justify-content: center;
`;

export const OfferData = styled.div`
    padding: 4rem 0 4rem 1.5rem;
    margin-bottom: .25rem;

	> a {
		display: inline-block;
	}
`;

export const OfferTitle = styled.h3`

`;

export const OfferImg = styled.img`
    width: 153px;
`;

export const OfferDescription= styled.p`
    margin-bottom: var(--mb-3);
`;