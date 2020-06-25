import React from "react";
import { ListGroup } from "react-bootstrap";

export default function Rules() {
  return (
    <ListGroup variant="flush" as="ul">
      <ListGroup.Item as="li">Компьютер загадывает любое четырёхзначное число.</ListGroup.Item>
      <ListGroup.Item as="li">Вы вводите свой вариант.</ListGroup.Item>
      <ListGroup.Item as="li">Если цифра совпала, но стоит не на своем месте - это корова.</ListGroup.Item>
      <ListGroup.Item as="li">Если цифра совпала и стоит на своем месте - это бык.</ListGroup.Item>
      <ListGroup.Item as="li">Нужно угадать число с 5 попыток.</ListGroup.Item>
    </ListGroup>
  );
}
