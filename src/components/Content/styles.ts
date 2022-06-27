import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const Content = styled.main`
  display: flex;
  background-color: #fff;
  width: 60%;
  margin-top: -5rem;
  border-radius: 1rem;
  padding: 1.5rem;
  flex-wrap: wrap;
	min-height: 10rem;

  @media (max-width: 800px) {
    width: 90%;
    flex-direction: column;
		padding: 1.5rem 0;
		margin-top: -7rem;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  width: 100%;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export const InputContent = styled.div`
	display: flex;
	gap: .2rem;
	flex-direction: column;
	align-items: flex-end;
	justify-content: flex-end;
`;

export const TodosContent = styled.ul`
	width: 100%;
	display: flex;
	flex-flow: wrap;
	padding: 1rem;
`;
