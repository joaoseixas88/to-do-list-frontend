import styled from "styled-components";

export const Container = styled.div``

export const Pressable = styled.button`
	background-color: ${({ theme }) => theme.colors.textColor};
	border: none;
	border-radius: 1rem;
	padding: 0.2rem .4rem;	
	font-size: 1rem;
	font-weight: bold;
	color: ${({ theme }) => theme.colors.shape};

	cursor: pointer;

	transition: 300ms;

	&:hover{
		background-color: ${({ theme }) => theme.colors.bgColor};;
	}
`