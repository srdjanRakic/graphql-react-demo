import React from 'react';
import { Button, Grid } from '@inplayer-org/inplayer-ui';
import {
  Modal,
  ModalHeaderHolder,
  ModalHeader,
  ModalContent,
  ModalActions
} from "./StyledModal";

const { Container, Cell } = Grid;

const modal = props => (
  <Modal>
    <ModalHeaderHolder>
      <ModalHeader>{props.title}</ModalHeader>
    </ModalHeaderHolder>
    <ModalContent>{props.children}</ModalContent>
    <ModalActions>
      <Container columns="1fr 1fr">
        <Cell>
          {props.canCancel && <Button onClick={props.onCancel}>Cancel</Button>}
        </Cell>
        <Cell>
          {props.canConfirm && (
            <Button onClick={props.onConfirm}>{props.confirmText}</Button>
          )}
        </Cell>
      </Container>
    </ModalActions>
  </Modal>
);

export default modal;
