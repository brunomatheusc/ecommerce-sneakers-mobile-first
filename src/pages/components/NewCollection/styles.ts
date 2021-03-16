import styled from 'styled-components';

export const NewContainer = styled.div`
    row-gap: 2rem;
`;

export const NewMens = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: var(--dark-color-lighten);
    border-radius: .5rem;
    padding: 2rem;
`;

export const NewMensImg = styled.img`
    width: 276px;
    margin-bottom: var(--mb-3);
`;

export const NewTitle = styled.h3`
    font-size: var(--bigger-font-size);
    margin-bottom: .25rem;
`;

export const NewPrice = styled.span`
    display: block;
    margin-bottom: var(--mb-3);
`;

export const NewSneaker = styled.div`
    display: grid;
    gap: 1.5rem;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
`;

export const NewSneakerOverlay = styled.div`
    position: absolute;
    left: 0;
    bottom: -100%;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(138, 138, 138, .3);
    transition: .3s;
`;

export const NewSneakerCard = styled.div`
    position: relative;
    padding: 3.5rem 1.5rem;
    background-color: var(--dark-color-lighten);
    border-radius: .5rem;
    overflow: hidden;
    display: flex;
    justify-content: center;

	&:hover {
		bottom: 0;

		${NewSneakerOverlay} {
			bottom: 0;
		}
	}
`;

export const NewSneakerImg = styled.img`
    width: 220px;
`;