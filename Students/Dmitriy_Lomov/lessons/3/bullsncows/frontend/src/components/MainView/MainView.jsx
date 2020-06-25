import React from "react";
import UserInput from "../../containers/UserInput";
import Rules from "../Rules";

import { Button, Card, Accordion } from "react-bootstrap";

export default function MainView({ guess, checkAttempt }) {
  return (
    <Accordion defaultActiveKey="0">
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="1">
            Правила игры
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="1">
          <Card.Body>
            <Rules />
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="0">
            Поле ввода
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
            <UserInput guessNumber={guess} checkAttempt={checkAttempt} />
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
}
