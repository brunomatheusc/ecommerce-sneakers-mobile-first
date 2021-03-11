import styled from 'styled-components';

export const CollectionSection = styled.section``;

export const CollectionContainer = styled.div`
	row-gap: 2rem;
	justify-content: center;
`;

export const CollectionCard = styled.div`
    position: relative;
    display: flex;
    height: 328px;
    background-color: var(--dark-color-lighten);
    padding: 2rem;
    border-radius: .5rem;
    transition: .3s;

	&:hover {
		transform: translateY(-.5rem);
	}
`;

export const CollectionData = styled.div`
    align-self: flex-end;

	> a {
		display: inline-block;
		color: var(--dark-color);
		font-weight: var(--font-bold);
		align-items: center;
	}
`;

export const CollectionName = styled.h3`
    font-size: var(--bigger-font-size);
    margin-bottom: .25rem;
`;

export const ColectionDescription = styled.p`
    margin-bottom: var(--mb-2);
`;

export const CollectionImage = styled.img`
    position: absolute;
    top: 0;
    right: 0;
    width: 230px;
`;
