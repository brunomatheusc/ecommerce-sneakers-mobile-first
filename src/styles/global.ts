import { createGlobalStyle } from "styled-components";
import { Nav, Menu, NavItem, NavList, NavToggle } from "../components/Header/styles";
import { CollectionContainer, CollectionImage } from "../pages/components/Collection/styles";
import { HomeContainer, HomeImage, HomeShape, HomeSneaker } from "../pages/components/Home/styles";
import { NewContainer, NewMens, NewMensImg } from "../pages/components/NewCollection/styles";
import { NewsLetterContainer, NewsletterDescription, NewsletterSubscribe } from "../pages/components/Newsletter/styles";
import { OfferContainer, OfferData } from "../pages/components/Offer/styles";

export default createGlobalStyle`
	:root {
		--header-height: 3rem;

		--font-medium: 500;
		--font-semi-bold: 600;
		--font-bold: 700;

		--dark-color: #141414;
		--dark-color-light: #8a8a8a;
		--dark-color-lighten: #f2f2f2;
		--white-color: #fff;

		--body-font: 'Poppins', sans-serif;
		--big-font-size: 1.25rem;
		--bigger-font-size: 1.5rem;
		--biggest-font-size: 2rem;
		--h2-font-size: 1.25rem;
		--normal-font-size: .938rem;
		--smalle-font-size: .813rem;

		--mb-1: .5rem;
		--mb-2: 1rem;
		--mb-3: 1.5rem;
		--mb-4: 2rem;
		--mb-5: 2.5rem;
		--mb-6: 3rem;

		--z-fixed: 100;

		--rotate-img: rotate(-30deg);

		@media screen and (min-width: 768px) {
			:root {
				--big-font-size: 1.55rem;
				--bigger-font-size: 2rem;
				--biggest-font-size: 3rem;
				--normal-font-size: 1rem;
				--smalle-font-size: .875rem;
			}
		}

		@media screen and (min-width: 576px) {
			${CollectionContainer} {
				grid-template-columns: 415px;				
			}

			${CollectionImage} {
				width: 260px;				
			}

			${OfferContainer} {
				grid-template-columns: max-content max-content;				
			}

			${OfferData} {
				text-align: center;				
			}

			${NewMens} {
				align-items: center;				
			}
		}

		@media screen and (min-width: 768px) {
			body {
				margin: 0;
			}			

			.section {
				padding: 7rem 0 3rem;
			}

			.section-title::after {
				width: 76px;
			}

			${Nav} {
				height: calc(var(--header-height) + 1.5rem);				
			}

			${Menu} {
				margin-left: auto;
			}

			${NavList} {
				display: flex;
			}

			${NavItem} {
				margin-left: var(--mb-6);
				margin-bottom: 0;
			}

			${NavToggle} {
				display: none; 
			}

			${HomeContainer} {
				height: 100vh;
				grid-template-columns: max-content max-content;
				justify-content: center;
				align-items: center;				
			}

			${HomeSneaker} {
				order: 1;
			}

			${HomeShape} {
				width: 376px;
				height: 376px;
			}

			${HomeImage} {
				width: 470px;
				top: 3.5rem;
				right: 0;
				left: -3rem; 
			}

			${NewsLetterContainer} {
				grid-template-columns: max-content max-content;
				justify-content: center;
				align-items: center;
				padding: 4.5rem 2rem;
				column-gap: 3rem;				
			}

			${NewsletterDescription} {
				margin-bottom: 0;				
			}

			${NewsletterSubscribe} {
				width: 360px;
        		height: max-content;				
			}
		}

		@media screen and (min-width: 1024px) {
			.bd-grid {
				margin-left: auto;
				margin-right: auto;
			}

			${HomeContainer} {
				column-gap: 8rem;				
			}

			${CollectionContainer} {
				grid-template-columns: repeat(2, 415px);				
			}

			${NewContainer} {
				grid-template-columns: max-content 1fr;				
			}

			${NewMens} {
				align-items: initial;
				justify-content: flex-end;
				padding: 4rem 2rem;				
			}

			${NewMensImg} {
				margin-bottom: var(--mb-6);
			}
		}
	}

	*, ::before, ::after {
		box-sizing: border-box;
	}

	html {
		scroll-behavior: smooth;
	}

	body {
		margin: var(--header-height) 0 0 0;
		font-family: var(--body-font);
		font-size: var(--normal-font-size);
		font-weight: var(--font-medium);
		color: var(--dark-color);
		line-height: 1.6;
	}

	h1, h2, h3, p, ul {
		margin: 0;
	}

	ul {
		padding: 0;
		list-style: none;
	}

	a {
		text-decoration: none;
		color: var(--dark-color);
	}

	img {
		max-width: 100%;
		height: auto;
		display: block;
	}

	.section {
		padding: 5rem 0 2rem;
	}

	.section-title {
		position: relative;
		font-size: var(--big-font-size);
		margin-bottom: var(--mb-4);
		text-align: center;
		letter-spacing: .1rem;
	}

	.section-title::after {
		content: '';
		position: absolute;
		width: 56px;
		height: .18rem;
		top: -1rem;
		left: 0;
		right: 0;
		margin: auto;
		background-color: var(--dark-color);
	}

	.bd-grid {
		max-width: 1024px;
		display: grid;
		grid-template-columns: 100%;
		column-gap: 2rem;
		width: calc(100% - 2rem);
		margin-left: var(--mb-2);
		margin-right: var(--mb-2);
	}

	.button-light {
		display: inline-block;
		color: var(--dark-color);
		font-weight: var(--font-bold);
		align-items: center;
	}
`;