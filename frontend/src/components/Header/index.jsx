import { RiShutDownLine } from "react-icons/ri";
import { Container, Logout, Profile } from "./styles";

export function Header() {
  return (
    <Container>
      <Profile>
        <img
          src="https://github.com/marcusvinicius0.png"
          alt="Foto do usuário"
        />

        <div>
          <span>Bem-vindo(a)</span>
          <strong>Marcus Vinícius B</strong>
        </div>
      </Profile>

      <Logout>
        <RiShutDownLine />
      </Logout>
    </Container>
  );
}
