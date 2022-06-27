import styled from "styled-components";

export const Container = styled.header`
  background-color: ${({ theme }) => theme.colors.primaryBlue};
  width: 100%;
  display: grid;
	height: 30vh;
  grid-template-columns: repeat(3, 1fr);
	color: #fff;
	padding: 2rem .5rem;

	@media (max-width: 800px) {
		padding: .5rem;
	}

`;

export const TitleContent = styled.div`	
	font-size: 2rem;
	font-weight: bold;
	display: flex;
	justify-content: center;

	@media (max-width: 800px) {
		font-size: 1.5rem;
	}

`;

export const AvatarContent = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	margin-left: 5rem;
	justify-content: flex-start;
	@media (max-width: 800px) {
		padding: .5rem;
		
		margin-left: 0;
	}
`;
