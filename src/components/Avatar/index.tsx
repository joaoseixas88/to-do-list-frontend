import { Container, Image } from "./styles";

interface AvatarProps{
	uri?: string
}

export function Avatar({uri}: AvatarProps){
	return(
		<Container>
			<Image src="https://i.pravatar.cc/50" alt="Avatar" />
		</Container>
	)
}