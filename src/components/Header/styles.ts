import styled, { css } from 'styled-components';
import Link from 'next/link';

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

export const Container = styled.header`
	width: 100%;
	position: fixed;
	top: 0;
	left: 0;
	z-index: var(--z-fixed);
	background-color: var(--dark-color-lighten);
`;

export const Nav = styled.nav`
	max-width: 1024px;
	display: grid;
	grid-template-columns: 100%;
	column-gap: 2rem;
	width: calc(100% - 2rem);
	margin-left: var(--mb-2);
	margin-right: var(--mb-2);

	height: var(--header-height);
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const NavItem = styled.li`
	margin-bottom: var(--mb-4);
`;

export const NavLogo = styled(Link)`
	font-weight: var(--font-semi-bold);
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