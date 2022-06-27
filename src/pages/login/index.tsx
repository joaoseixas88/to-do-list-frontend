import { Input } from "../../components/Input";
import { Container, Content } from "./styles";

export function Login() {
 

  return (
			<Container>
				<Content>
					<Input label="Email" />
					<Input label="Senha" type={'password'}/>
				</Content>
			</Container>
  )
}
