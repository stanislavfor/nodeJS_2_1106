import React from "react";

import { Modal, Button } from "react-bootstrap";

export default function ResultsView({
  initGame,
  showModal,
  checkWinner,
  guess,
}) {
  return (
    <Modal
      show={showModal}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">Результат</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>{checkWinner ? "Поздравляю! Ты победил!" : "Увы, ты проиграл!"}</h4>
        <p>
          Загаданное число:&nbsp;<strong>{guess}</strong>
        </p>
        <p>Давай начнем сначала?</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="success" onClick={initGame}>
          Начать игру!
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
