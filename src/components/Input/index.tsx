import { DetailedHTMLProps, HtmlHTMLAttributes, HTMLInputTypeAttribute, InputHTMLAttributes } from "react"
import { Container, StyledInput } from "./styles"


export interface InputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>{
	label?: string
	type?: string
}


export const Input = ({label, type}: InputProps) => {
	return(
		<Container>
			{label}
			<StyledInput type={type}/>
		</Container>
	)
}