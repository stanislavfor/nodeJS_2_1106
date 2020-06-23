import React from "react";
import { Jumbotron, Container } from "react-bootstrap";

export default function Statistics({ bulls, cows, status }) {
  return (
    <Jumbotron fluid>
      <Container>
        <p>{`Твои быки - ${bulls}`}</p>
        <p>{`Твои коровы - ${cows}`}</p>
        <p>{`Твой статус - ${status}`}</p>
      </Container>
    </Jumbotron>
  );
}
