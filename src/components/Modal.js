import React, { useCallback, useEffect, useRef } from "react";
import styled from "styled-components";

const Modal = ({ showModal, setShowModal }) => {
  const modalRef = useRef();
  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && showModal) {
        setShowModal(false);
        console.log("I pressed");
      }
    },
    [setShowModal, showModal]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  return (
    <div>{showModal ? <ModalBackground>modal</ModalBackground> : null}</div>
  );
};

const ModalBackground = styled.div`
  width: 100px;
  height: 100px;
  display: block;
  position: fixed;
  background: var(--border-color);
  z-index: 10;
  /* display: flex; */
  justify-content: center;
  align-items: center;
`;
// const ModalComponentWrapper = styled.div`
//   width: 800px;
//   height: 500px;
//   box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
//   background: var(--border-color);
//   display: grid;
//   z-index: 10;
//   border-radius: 10px;
// `;

export default Modal;
