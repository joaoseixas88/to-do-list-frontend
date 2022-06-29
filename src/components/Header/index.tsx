import { useAuth } from "../../hooks/AuthContext";
import { Avatar } from "../Avatar";
import { AvatarContent, Container, LoginButton, TitleContent } from "./styles";

export function Header() {

	const { openLoginModal, isAuthenticated, user} = useAuth()

	
  return (
    <Container>
      <div />
      <TitleContent>Lista de tarefas</TitleContent>
      <AvatarContent>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Avatar />
          {!isAuthenticated ? <LoginButton onClick={() => openLoginModal()}>Login</LoginButton> : <p>{user?.name}</p>}
        </div>
      </AvatarContent>
    </Container>
  );
}
