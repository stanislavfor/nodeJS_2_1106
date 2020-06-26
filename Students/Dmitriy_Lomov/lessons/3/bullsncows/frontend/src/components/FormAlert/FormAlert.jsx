import React from "react";

import { Alert } from "react-bootstrap";
export default function FormError({ inputValid }) {
  if (!inputValid) {
    return (
      <Alert variant="danger">
        Внимание! Нужно ввести <strong>четырёхзначное число</strong>! Будьте
        внимательней!
      </Alert>
    );
  } else {
    return (
      <Alert variant="info">Хм... Интересный вариант! Жми "Угадать"!</Alert>
    );
  }
}
