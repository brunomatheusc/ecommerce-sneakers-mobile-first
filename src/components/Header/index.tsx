import React, { useState } from 'react';
import { Container, Nav, NavToggle, NavItem, NavList, Menu } from './styles';
import { BsGrid3X3Gap, BsBag } from 'react-icons/bs';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Header() {
	const [showMenu, setShowMenu] = useState(false);

	const route = useRouter();

	function handleActive(menu: string) {
		if (typeof window !== "undefined") {
			const { hash } = window.location;
	
			if (!hash) {
				const path = route.pathname.replace('/', '');
	
				if (path) {
					return (path == menu) ? true : false;
				}
	
				return false;
			} else {
				const replacedHash = hash.replace('#', '');
	
				return (replacedHash == menu) ? true : false;
			}
		}
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
						<NavItem className="nav__item" active={handleActive('home')}><Link href="/#home">Home</Link></NavItem>
						<NavItem className="nav__item" active={handleActive('featured')}><Link href="/#featured">Featured</Link></NavItem>
						<NavItem className="nav__item" active={handleActive('women')}><Link href="/#women">Women</Link></NavItem>
						<NavItem className="nav__item" active={handleActive('new')}><Link href="/#new">New</Link></NavItem>
						<NavItem className="nav__item" active={handleActive('shop')}><Link href="/shop">Shop</Link></NavItem>
					</NavList>
				</Menu>

				<div className="nav__shop">
					<BsBag />
				</div>
			</Nav>
		</Container>
	);
}
