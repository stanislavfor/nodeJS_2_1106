import React from "react";
import { Jumbotron, Container } from "react-bootstrap";

export default function Statistics({ bulls, cows, rounds, attempts }) {
  return (
    <Jumbotron className="d-flex">
      <Container>
        <h5>Текущий ход</h5>
        <p>{`Быки - ${bulls}`}</p>
        <p>{`Коровы - ${cows}`}</p>
        <p>{`Осталось раундов - ${rounds}`}</p>
      </Container>
      <Container>
        <h5>История ходов</h5>
        <Container>
          {attempts.length > 0 &&
            attempts.map((el, i) => (
              <p key={i}>
                {i + 1} попытка:&nbsp;
                <strong>{el.attempt}</strong>&nbsp; Б - <span>{el.bulls}</span>
                &nbsp;К - <span>{el.cows}</span>
              </p>
            ))}
        </Container>
      </Container>
    </Jumbotron>
  );
}
