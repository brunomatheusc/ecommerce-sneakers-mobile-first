import styled, { css } from 'styled-components';

export const FeaturedSection = styled.section`

`;

export const Title = styled.h2`

`;

export const Container = styled.div`
    row-gap: 2rem;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)) !important;
`;

export const Sneaker = styled.article`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
    background-color: var(--dark-color-lighten);
    border-radius: .5rem;
    transition: .3s;

	&:hover {
		transform: translateY(-.5rem);
	}
`;

export const SneakerSale = styled.div`
    position: absolute;
    left: .5rem;
    background-color: var(--dark-color);
    color: var(--white-color);
    padding: .25rem .5rem;
    border-radius: .25rem;
    font-size: var(--h2-font-size);
    transform: rotate(-90deg);
    letter-spacing: .1rem;
`;

export const SneakerImg = styled.img`
    width: 220px;
    margin-top: var(--mb-3);
    margin-bottom: var(--mb-6);
    transform: var(--rotate-img);
    filter: drop-shadow(0 12px 8px rgba(0, 0, 0, 0.2));
`;

const namePrice = css`
    font-size: var(--h2-font-size);
    letter-spacing: .1rem;
    font-weight: var(--font-bold);
`;

export const SneakerName = styled.span`
	${namePrice};
    margin-bottom: var(--mb-1);
`;

export const SneakerPrice = styled.div`
	${namePrice};
    margin-bottom: var(--mb-4);
`;

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
`;