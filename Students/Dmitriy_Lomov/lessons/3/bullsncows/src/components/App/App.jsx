import React, { Component } from "react";
import UserInput from "../UserInput";
import Rules from "../Rules";

import randomizer from "../../utils/randomizer";
import checker from "../../utils/checker";

import { Button, Card, Accordion, Jumbotron, Container } from "react-bootstrap";

class App extends Component {
  constructor() {
    super();
    this.state = {
      guess: [],
      bulls: 0,
      cows: 0,
      rounds: 5,
      status: true,
    };
  }

  handleGuessNumber = () => {
    const guessNumber = randomizer();

    this.setState({ guess: guessNumber });
  };

  checkAttempt = (bulls, cows) => {
    const { rounds } = this.state;
    const isWin = checker(bulls, rounds);

    this.setState({ status: isWin, bulls: bulls, cows: cows });
  };

  render() {
    const { guess, bulls, cows, status } = this.state;

    return (
      <div className="container">
        <Jumbotron>
          <h1>Быки и Коровы</h1>
          <h6>Добро пожаловать в игру "Быки и Коровы"!</h6>
          <p>
            Чтобы начать игру, жми кнопку ниже! Если не знаком с правилами,
            внизу все написано, разворачивай "Правила игры" и читай!.
          </p>
          <p>
            <Button variant="success" onClick={this.handleGuessNumber}>
              Начать игру!
            </Button>
          </p>
        </Jumbotron>
        <Jumbotron fluid>
          <Container>
            <p>{`Твои быки - ${bulls}`}</p>
            <p>{`Твои коровы - ${cows}`}</p>
            <p>{`Твой статус - ${status}`}</p>
          </Container>
        </Jumbotron>
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
                <UserInput
                  guessNumber={guess}
                  checkAttempt={this.checkAttempt}
                />
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
    );
  }
}

export default App;
