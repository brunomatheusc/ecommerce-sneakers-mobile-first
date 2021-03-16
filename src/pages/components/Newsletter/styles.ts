import styled from 'styled-components';

export const Container = styled.div`
    background-color: var(--dark-color);
    color: var(--white-color);
    padding: 2rem .5rem;
    border-radius: .5rem;
    text-align: center;
`;

export const NewsletterTitle = styled.h3`
    font-size: var(--bigger-font-size);
    margin-bottom: var(--mb-2);
`;

export const NewsletterDescription = styled.p`
    margin-bottom: var(--mb-5);
`;

export const NewsletterSubscribe = styled.form`
    display: flex;
    column-gap: .5rem;
    background-color: var(--white-color);
    padding: .5rem;
    border-radius: .5rem;
`;

export const NewsletterInput = styled.input`
    outline: none;
    border: none;
    width: 90%;
    font-size: var(--normal-font-size);

	&::placeholder {
		color: var(--dark-color);
		font-family: var(--body-font);
		font-size: var(--normal-font-size);
		font-weight: var(--font-semi-bold);
	}
`;