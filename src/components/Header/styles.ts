import styled, { css } from 'styled-components';

const media = css`
	@media screen and (max-width: 768px) {
		position: fixed;
		top: var(--header-height);
 		left: -100%;
		width: 70%;
		height: 100vh;
		padding: 2rem;
		background-color: var(--white-color);
		transition: .5s;
	}
`;

const navActive = css`
	position: relative;

	&::before {
		content: '';
		position: absolute;
		bottom: -.5rem;
		left: 45%;
		width: 4px;
		height: 4px;
		background-color: var(--dark-color);
		border-radius: 50%;
	}
`;

export const Container = styled.header`
	width: 100%;
	position: fixed;
	top: 0;
	left: 0;
	z-index: var(--z-fixed);
	background-color: var(--dark-color-lighten);
`;

export const Nav = styled.nav`
	height: var(--header-height);
	display: flex !important;
	justify-content: space-between;
	align-items: center;

	> a {
		font-weight: var(--font-semi-bold) !important;
	}
`;

export const NavList = styled.ul`
	display: flex;
`;

export const NavItem = styled.li<{active: boolean}>`
	margin-bottom: var(--mb-4);

	a {
		${({ active }) => active && css`
			${navActive};
		`};
	}

`;

const navToggleShop = css`
	font-size: 1.3rem;
	cursor: pointer;
`;

export const NavToggle = styled.div<{show: boolean}>`
	${navToggleShop};

	${({ show }) => show && css`
		left: 0;
	`}
`;

export const NavShop = styled.div`
	${navToggleShop};
`;

export const Menu = styled.div<{show: boolean}>`
	${media};

	${({ show }) => show && css`
		left: 0 !important;
	`}
`;