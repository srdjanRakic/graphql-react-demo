import styled from "styled-components";

export const Modal = styled.div`
  width: 90%;
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  position: fixed;
  top: 20vh;
  left: 5%;
  z-index: 100;

  @media (min-width: 768px) {
    .modal {
      width: 30rem;
      left: calc((100% - 30rem) / 2);
    }
  }
`;

export const ModalHeaderHolder = styled.div`
  padding: 1rem;
  background: #00a5e6;
  color: white;
`;

export const ModalHeader = styled.div`
  margin: 0;
  font-size: 1.25rem;
`;
export const ModalContent = styled.div`
  padding: 1rem;
`;

export const ModalActions = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 1rem;
`;
