import React from "react";
import { Jumbotron, Container } from "react-bootstrap";

export default function Statistics({ bulls, cows, rounds, attempt }) {
  return (
    <Jumbotron fluid>
      <Container>
        <h5>Статистика</h5>
        {attempt.length > 0 && <p>{`Твоя попытка - ${attempt}`}</p>}
        <p>{`Твои быки - ${bulls}`}</p>
        <p>{`Твои коровы - ${cows}`}</p>
        <p>{`Осталось раундов - ${rounds}`}</p>
      </Container>
    </Jumbotron>
  );
}
