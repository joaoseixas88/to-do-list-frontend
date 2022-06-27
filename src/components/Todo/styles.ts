import styled from "styled-components";

interface ButtonProps{
	color?: string
	size?: string
}

export const Container = styled.li`
	list-style: none;
	margin: .5rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	border-bottom: 1px solid ${({ theme }) => theme.colors.primaryGray};
	padding: .4rem;

	
`

export const Button = styled.button<ButtonProps>`
	border: none;
	display: flex;
	align-items: center;
	border-radius: 1rem;
	padding: .4rem .4rem;
	background-color: ${({ theme, color  }) => color ? color :  theme.colors.primaryGreen};
	font-size: ${({ size  }) => size ? size :  '1rem'};

	cursor: pointer;

	transition: 300ms;

	&:hover{
		background-color: ${({ theme }) => theme.colors.bgColor};
	}
`

