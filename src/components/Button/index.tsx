import { Container, Pressable } from "./styles"

interface ButtonProps{
	label: string
	onClick: () => void
}


export function Button({label, onClick}:ButtonProps){
	return (
		<Container>
			<Pressable onClick={onClick}>{label}</Pressable>
		</Container>
	)
}