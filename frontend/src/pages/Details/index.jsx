import { Container, Content, Links } from "./styles";

import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { Section } from "../../components/Section";
import { Tag } from "../../components/Tag";

export function Details() {
  return (
    <Container>
      <Header />

      <main>
        <Content>
          <ButtonText title="Excluir nota" />

          <h1>Introdução ao React</h1>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            laudantium praesentium earum id sunt minus nihil commodi, sequi quis
            excepturi asperiores quo eius aperiam quibusdam pariatur
            perspiciatis libero, eos inventore.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            laudantium praesentium earum id sunt minus nihil commodi, sequi quis
            excepturi asperiores quo eius aperiam quibusdam pariatur
            perspiciatis libero, eos inventore.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            laudantium praesentium earum id sunt minus nihil commodi, sequi quis
            excepturi asperiores quo eius aperiam quibusdam pariatur
            perspiciatis libero, eos inventore.
          </p>

          <Section title="Links úteis">
            <Links>
              <li>
                <a href="#">https://app.rocketseat.com.br/</a>
              </li>
              <li>
                <a href="#">https://app.rocketseat.com.br/</a>
              </li>
            </Links>
          </Section>

          <Section title="Marcadores">
            <Tag title="express" />
            <Tag title="nodejs" />
          </Section>

          <Button title="Voltar" loading />
        </Content>
      </main>
    </Container>
  );
}
