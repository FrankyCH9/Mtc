import React from 'react';
import Modal from 'react-modal';

function InfoModal({ isOpen, onClose }) {
  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} className="Modal" overlayClassName="Overlay">
      <h2>Información</h2>
      <p>Para obtener tu licencia de conducir, debes realizar los siguientes pasos:</p>
      <ul>
        <li>Realizar el examen médico de tránsito</li>
        <li>Presentar los documentos requeridos (DNI)</li>
        <li>Pagar la tarifa correspondiente</li>
        <li>Realizar el examen teórico de conocimientos de tránsito</li>
        <li>Realizar el examen práctico de manejo</li>
      </ul>
      <button onClick={onClose}>Cerrar</button>
    </Modal>
  );
}

export default InfoModal;