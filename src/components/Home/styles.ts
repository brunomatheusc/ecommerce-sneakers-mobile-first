import styled from 'styled-components';

export const Main = styled.main``;

export const HomeSection = styled.section`
	background-color: var(--dark-color-lighten);
	overflow: hidden;
`;

export const HomeContainer = styled.div`
	height: calc(100vh - var(--header-height));

	max-width: 1024px;
	display: grid;
	grid-template-columns: 100%;
	column-gap: 2rem;
	width: calc(100% - 2rem);
	margin-left: var(--mb-2);
	margin-right: var(--mb-2);
`;

export const HomeSneaker = styled.div`
	position: relative;
	display: flex;
	justify-content: center;
	align-self: center;
`;

export const HomeShape = styled.div`
	width: 220px;
	height: 220px;
	background-color: var(--dark-color);
	border-radius: 50%;
`;

export const HomeImage = styled.img`
	position: absolute;
	top: 1.5rem;
	max-width: initial;
	width: 275px;
	transform: var(--rotate-img);
`;

export const HomeData = styled.div`
	> a {
		display: inline-block;
	}
`;

export const HomeNew = styled.span`
	display: block;
	font-size: var(--smaller-font-size);
	font-weight: var(--font-semi-bold); 
	margin-bottom: var(--mb-2);
`;

export const HomeTitle = styled.h1`
	font-size: var(--bigger-font-size);
	margin-bottom: var(--mb-1);
`;

export const HomeDescription = styled.p`
	margin-bottom: var(--mb-6) !important;
`;

export const Button = styled.a`
	display: inline-block;
	background-color: var(--dark-color);
	color: var(--white-color) !important;
	padding: 1.125rem 2rem;
	font-weight: var(--font-medium);
	border-radius: .5rem;
	transition: .3s;

	&:hover {
		transform: translateY(-.25rem);
	}	
`;

export const ButtonLight = styled.button`
    display: inline-block;
    color: var(--dark-color);
    font-weight: var(--font-bold);
    align-items: center;
`;