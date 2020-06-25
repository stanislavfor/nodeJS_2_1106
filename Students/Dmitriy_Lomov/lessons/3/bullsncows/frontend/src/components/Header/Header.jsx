import React from "react";
import { Jumbotron, Button } from "react-bootstrap";

export default function Header({ initGame, guess }) {
  return (
    <Jumbotron>
      <h1>Быки и Коровы</h1>
      <h6>Добро пожаловать в игру "Быки и Коровы"!</h6>
      <p>
        Чтобы начать игру, жми кнопку ниже! Если не знаком с правилами, внизу
        все написано, разворачивай "Правила игры" и читай!.
      </p>
      <p>
        <Button variant="success" onClick={initGame}>
          Начать игру!
        </Button>
      </p>
      {guess.length > 0 && <strong>Компьютер загадал число!</strong>}
    </Jumbotron>
  );
}
