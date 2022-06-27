import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import styled from "styled-components";

interface StyledInputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.primaryBlue};
  width: 100%;
  font-size: 20px;
`;

export const StyledInput = styled.input`
	border: none;
	background: ${({ theme }) => theme.colors.primaryBlue};
	color: ${({ theme }) => theme.colors.shape};
	font-weight: bold;
	border-radius: 5px;
	padding: .5rem;
	width: 20rem;
	
	@media (max-width: 800px) {
		width: 17rem;
	}	
	
`;
