import React, { Component } from "react";
import bullsCowsCounter from "../../utils/bullsCowsCounter";
import { Form, Button } from "react-bootstrap";

class UserInput extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
  }

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  };

  handleSubmit = (e) => {
    const { guessNumber, checkAttempt } = this.props;
    const { value } = this.state;
    const { bulls, cows } = bullsCowsCounter(value, guessNumber);

    console.log(`bulls: ${bulls}, cows: ${cows}`);
    checkAttempt(bulls, cows);

    e.preventDefault();
  };

  render() {
    const { value } = this.state;

    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group controlId="userNumber">
          <Form.Label>Отгадай четырехзначное число!</Form.Label>
          <Form.Control
            type="number"
            size="sm"
            placeholder="Твой вариант?.."
            value={value}
            onChange={this.handleChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Угадать
        </Button>
      </Form>
    );
  }
}

export default UserInput;
