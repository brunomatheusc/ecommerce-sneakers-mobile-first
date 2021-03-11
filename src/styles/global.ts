import { createGlobalStyle } from "styled-components";

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