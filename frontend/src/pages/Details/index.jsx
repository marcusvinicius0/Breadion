import { Container } from "./styles";

import { Button } from "../../components/Button";

export function Details() {
  const isAuthenticated = true;

  return (
    <Container>
      {isAuthenticated ? <p>Logged in, Welcome User</p> : ""}
      <Button title="BOTÃO TESTE PROPS" loading />
    </Container>
  );
}
