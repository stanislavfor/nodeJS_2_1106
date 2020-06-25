import React, { Component } from "react";
import bullsCowsCounter from "../../utils/bullsCowsCounter";
import { Form, Button } from "react-bootstrap";
import FormError from "../../components/FormAlert";

class UserInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      inputValid: false,
    };
  }

  handleChange = (e) => {
    const value = e.target.value;
    this.setState({ value: value }, () => {
      this.validateInput(value);
    });
  };

  handleSubmit = (e) => {
    const { guessNumber, checkAttempt } = this.props;
    const { value } = this.state;
    const { bulls, cows } = bullsCowsCounter(value, guessNumber);

    checkAttempt(bulls, cows, value);

    this.setState({ value: "", inputValid: false });

    e.preventDefault();
  };

  validateInput = (value) => {
    let inputValid = this.state.inputValid;

    inputValid = value.match(/\b\d{4}\b/);

    this.setState({ inputValid: inputValid });
  };

  render() {
    const { value, inputValid } = this.state;
    const { guessNumber } = this.props;
    if (guessNumber.length > 0) {
      return (
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="userNumber">
            <Form.Label>
              <FormError inputValid={inputValid} />
            </Form.Label>
            <Form.Control
              type="number"
              size="sm"
              placeholder="Твой вариант?.."
              isInvalid={!inputValid}
              isValid={inputValid}
              value={value}
              onChange={this.handleChange}
              required
            />
          </Form.Group>
          <Button disabled={!inputValid} variant="primary" type="submit">
            Угадать
          </Button>
        </Form>
      );
    } else {
      return (
        <p>Чтобы увидеть поле ввода и начать угадывать, нажми "Начать игру"!</p>
      );
    }
  }
}

export default UserInput;
