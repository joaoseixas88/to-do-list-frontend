import { DetailedHTMLProps, HtmlHTMLAttributes, HTMLInputTypeAttribute, InputHTMLAttributes } from "react"
import { Container, StyledInput } from "./styles"


export interface InputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>{
	label?: string
	type?: string
	error?: string
	
}


export const Input = ({label, error, type, onChange}: InputProps) => {
	return(
		<Container>
			{label}
			<StyledInput type={type} onChange={onChange}/>
			<p>{error}</p>
		</Container>
	)
}