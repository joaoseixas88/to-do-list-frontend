import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100vh;
`

export const Content = styled.div`
	display: flex;
	flex-direction: column;
	padding: 3rem;
	align-items: center;
	background-color: ${({ theme }) => theme.colors.bgColor};
	border-radius: 16px;

	box-shadow: 0rem 0rem 1rem  ${({ theme }) => theme.colors.borderColor};
	
	
`
