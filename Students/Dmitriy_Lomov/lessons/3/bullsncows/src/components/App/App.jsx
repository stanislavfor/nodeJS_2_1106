import React, { Component } from "react";
import UserInput from "../UserInput";
import Rules from "../Rules";
import Header from "../Header";
import Statistics from "../Statistics";

import randomizer from "../../utils/randomizer";
import checker from "../../utils/checker";

import { Button, Card, Accordion } from "react-bootstrap";

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
        <Header handleGuessNumber={this.handleGuessNumber} />
        <Statistics bulls={bulls} cows={cows} status={status} />
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
