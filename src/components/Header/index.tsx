import React, { useState } from 'react';
import { Container, Nav, NavToggle, NavItem, NavList, Menu } from './styles';
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

				<Link href="#">Roby</Link>

				<Menu className="nav__menu" show={showMenu}>
					<NavList className="nav__list">
						<NavItem className="nav__item" onClick={() => setShowMenu(false)} active={true}><Link href="/">Home</Link></NavItem>
						<NavItem className="nav__item" onClick={() => setShowMenu(false)} active={false}><Link href="#">Featured</Link></NavItem>
						<NavItem className="nav__item" onClick={() => setShowMenu(false)} active={false}><Link href="#">Women</Link></NavItem>
						<NavItem className="nav__item" onClick={() => setShowMenu(false)} active={false}><Link href="#">New</Link></NavItem>
						<NavItem className="nav__item" onClick={() => setShowMenu(false)} active={false}><Link href="#">Shop</Link></NavItem>
					</NavList>
				</Menu>

				<div className="nav__shop">
					<BsBag />
				</div>
			</Nav>
		</Container>
	);
}
