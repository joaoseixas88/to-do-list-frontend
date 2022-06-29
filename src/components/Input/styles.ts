import styled from "styled-components";



export const Container = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.primaryBlue};
  width: 100%;
  font-size: 20px;
	p{
		color: ${({ theme }) => theme.colors.primaryRed};
		font-size: 1rem;
	}
`;

export const StyledInput = styled.input`
	border: none;
	background: ${({ theme }) => theme.colors.primaryBlue};
	color: ${({ theme }) => theme.colors.shape};
	font-weight: bold;
	border-radius: 5px;
	padding: .5rem;
	width: 100%;
	
	@media (max-width: 800px) {
		width: 100%;
	}	
	
`;
