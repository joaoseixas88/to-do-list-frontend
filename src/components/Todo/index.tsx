import { Button, Container } from "./styles";
import { MdDownloadDone } from "react-icons/md";
import { FiTrash } from "react-icons/fi";
import { AiOutlineEdit } from "react-icons/ai";
import { useTheme } from "styled-components";

interface TodoProps {
  title: string;
}

export function Todo({ title }: TodoProps) {
  const {
    colors: { primaryRed, shape },
  } = useTheme();

  return (
    <Container>
      <div
        style={{
          flexDirection: "row",
          display: "flex",
          gap: ".3rem",
          alignItems: "center",
        }}
      >
        <Button size="1rem" color={shape}>
          <AiOutlineEdit color="black" />
        </Button>
        <p>{title}</p>
      </div>
      <div style={{ flexDirection: "row", display: "flex", gap: ".3rem" }}>
        <Button>
          <MdDownloadDone color="#fff" />
        </Button>
        <Button color={primaryRed}>
          <FiTrash color="#fff" />
        </Button>
      </div>
    </Container>
  );
}
