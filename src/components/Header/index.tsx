import React, { useState } from 'react';
import { Container, Nav, NavToggle, NavItem, NavList, Menu } from './styles';
import { BsGrid3X3Gap, BsBag } from 'react-icons/bs';
import Link from 'next/link';

export default function Header() {
	const [showMenu, setShowMenu] = useState(false);
	const [active, setActive] = useState(false);

	function handleActive(event: React.MouseEvent<HTMLLIElement>) {
		console.log(event.target);
		// console.log(window.location.hash);
		// console.log(document.querySelector(window.location.hash));
		setShowMenu(false);
	}

	return (
		<Container className="l-header">
			<Nav className="nav bd-grid">
				<NavToggle className="nav__toggle" show={showMenu} onClick={() => setShowMenu(!showMenu)}>
					<BsGrid3X3Gap />
				</NavToggle>

				<Link href="#">Roby</Link>

				<Menu className="nav__menu" show={showMenu}>
					<NavList className="nav__list">
						<NavItem className="nav__item" onClick={(e) => handleActive(e)} active={true}><Link href="#home">Home</Link></NavItem>
						<NavItem className="nav__item" onClick={(e) => handleActive(e)} active={true}><Link href="#featured">Featured</Link></NavItem>
						<NavItem className="nav__item" onClick={(e) => handleActive(e)} active={false}><Link href="#women">Women</Link></NavItem>
						<NavItem className="nav__item" onClick={(e) => handleActive(e)} active={false}><Link href="#new">New</Link></NavItem>
						<NavItem className="nav__item" onClick={(e) => handleActive(e)} active={false}><Link href="/shop">Shop</Link></NavItem>
					</NavList>
				</Menu>

				<div className="nav__shop">
					<BsBag />
				</div>
			</Nav>
		</Container>
	);
}
