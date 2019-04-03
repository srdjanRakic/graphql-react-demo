import React from 'react';
import styled from "styled-components";
import { Typography, Button } from '@inplayer-org/inplayer-ui';

const EventsItem = styled.li`
  margin: 1rem 0;
  padding: 1rem;
  border: 1px solid #00a5e6;
  display: flex;
  justify-content: space - between;
  align-items: center;
`;
const eventItem = props => (
  <EventsItem>
    <>
      <Typography variant="h1">{props.title}</Typography>
      <Typography variant="h2">
        ${props.price} - {new Date(props.date).toLocaleDateString()}
      </Typography>
    </>
    <>
      {props.userId === props.creatorId ? (
        <Typography variant="p">Your the owner of this event.</Typography>
      ) : (
        <Button className="btn" onClick={props.onDetail.bind(this, props.eventId)}>
          View Details
        </Button>
      )}
    </>
  </EventsItem>
);

export default eventItem;
