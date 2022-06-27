import { Avatar } from "../Avatar";
import { AvatarContent, Container, TitleContent } from "./styles";

export function Header() {
  return (
    <Container>
      <div />
      <TitleContent>
				Lista de tarefas
			</TitleContent>
      <AvatarContent>
        <Avatar />
				Login
      </AvatarContent>
    </Container>
  );
}
