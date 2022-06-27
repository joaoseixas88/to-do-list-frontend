import { Button } from "../Button";
import { Input } from "../Input";
import { Todo } from "../Todo";
import {
  Container,
  Content as StyledContent,
  Header,
  InputContent,
  TodosContent,
} from "./styles";

export function Content() {
  return (
    <Container>
      <StyledContent>
        <Header>
          <div>
            <h1>Tarefas</h1>
          </div>
          <InputContent>
            <Input />
            <Button label="+" onClick={() => {}} />
          </InputContent>
        </Header>
        <TodosContent>
          <Todo title="Comprar coentro"></Todo>
          <Todo title="Estudar mais react"></Todo>
          <Todo title="Estudar mais css"></Todo>
          <Todo title="Estudar mais html"></Todo>
        </TodosContent>
      </StyledContent>
    </Container>
  );
}
