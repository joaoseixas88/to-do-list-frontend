import React, { useState } from "react";
import Modal from "react-modal";
import { useAuth } from "../../hooks/AuthContext";
import { Button } from "../Button";
import { Input } from "../Input";
import { Container } from "./styles";

export function LoginModal() {
  addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      console.log("enter");
    }
  });
  const { isLoginModalOpen, closeLoginModal, signUp, setUser, login } =
    useAuth();

  const [registering, setRegistering] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");
  const [checkPasswordDontMatch, setCheckPasswordDontMatch] = useState(false);

  async function handleLogin() {
    if (!email || !password) {
      return;
    }

    if (
      await login({
        email,
        password,
      })
    ) {
      setCheckPasswordDontMatch(false);
      setRegistering(false);
      setEmail("");
      setName("");
      setPassword("");
      setCheckPassword("");
      closeLoginModal();
      return;
    }

    window.alert("Algo deu errado");
    return;
  }

  async function handleRegister() {
    if (!name || !email || !password) {
      console.log(name, email, password);
      console.log("preencher campos");
      return;
    }
    if (password === checkPassword) {
      if (
        await signUp({
          email,
          name,
          password,
        })
      ) {
        setUser({ name, email });
        setCheckPasswordDontMatch(false);
        setRegistering(false);
        setEmail("");
        setName("");
        setPassword("");
        setCheckPassword("");
        closeLoginModal();
        return;
      }

      window.alert("Algo deu errado");
      return;
    }
    setCheckPasswordDontMatch(true);
  }

  return (
    <Modal
      isOpen={isLoginModalOpen}
      className="modal-content"
      overlayClassName="modal-overlay"
      onRequestClose={() => closeLoginModal()}
    >
      {!registering ? (
        <p>
          Não tem conta? <a onClick={() => setRegistering(true)}>Registre-se</a>
        </p>
      ) : (
        <p>
          <a onClick={() => setRegistering(false)}>Já tem conta? Logue-se</a>
        </p>
      )}
      {registering && (
        <Input label="Nome" onChange={(e) => setName(e.target.value)} />
      )}
      <Input label="Email" onChange={(e) => setEmail(e.target.value)} />
      <Input
        label="Senha"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      {registering && (
        <Input
          label="Repita sua senha"
          type="password"
          onChange={(e) => {
            if (checkPasswordDontMatch) {
              setCheckPasswordDontMatch(false);
            }
            setCheckPassword(e.target.value);
          }}
          error={checkPasswordDontMatch ? "Senhas não conferem" : ""}
        />
      )}
      <div
        style={{
          display: "flex",
          gap: "1rem",
        }}
      >
        {!registering ? (
          <Button label="Login" onClick={handleLogin} />
        ) : (
          <Button label="Registrar-se" onClick={handleRegister} />
        )}
      </div>
    </Modal>
  );
}
