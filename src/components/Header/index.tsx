import React, { useEffect, useState } from 'react';
import { Container, Nav, NavToggle, NavItem, NavLogo, Menu } from './styles';
import { BsGrid3X3Gap, BsBag } from 'react-icons/bs';
import Link from 'next/link';

export default function Header() {
	const [showMenu, setShowMenu] = useState(false);

	return (
		<Container className="l-header">
			<Nav className="nav bd-grid">
				<NavToggle className="nav__toggle" show={showMenu} onClick={() => setShowMenu(!showMenu)}>
					<BsGrid3X3Gap />
				</NavToggle>

				<NavLogo href="#">Roby</NavLogo>

				<Menu className="nav__menu" show={showMenu}>
					<ul className="nav__list">
						<NavItem className="nav__item" onClick={() => setShowMenu(false)}><Link href="/">Home</Link></NavItem>
						<NavItem className="nav__item" onClick={() => setShowMenu(false)}><Link href="#">Featured</Link></NavItem>
						<NavItem className="nav__item" onClick={() => setShowMenu(false)}><Link href="#">Women</Link></NavItem>
						<NavItem className="nav__item" onClick={() => setShowMenu(false)}><Link href="#">New</Link></NavItem>
						<NavItem className="nav__item" onClick={() => setShowMenu(false)}><Link href="#">Shop</Link></NavItem>
					</ul>
				</Menu>

				<div className="nav__shop">
					<BsBag />
				</div>
			</Nav>
		</Container>
	);
}
