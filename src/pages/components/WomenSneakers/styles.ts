import styled, { css } from 'styled-components';

export const WomenSection = styled.section`

`;

export const WomenTitle = styled.h2`

`;

export const WomenContainer = styled.div`
    row-gap: 2rem;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
`;

export const WomenSneaker = styled.article`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
    background-color: var(--dark-color-lighten);
    border-radius: .5rem;
    transition: .3s;
`;

export const WomenImg = styled.img`
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

export const WomenName = styled.span`
	${namePrice};
    margin-bottom: var(--mb-1);
`;

export const WomenPrice = styled.div`
	${namePrice};
    margin-bottom: var(--mb-4);
`;