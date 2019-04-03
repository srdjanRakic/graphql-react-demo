import React from 'react';
import styled from "styled-components"
import { Button } from "@inplayer-org/inplayer-ui";


const BookintList = styled.ul`
  list-style: none;
  margin: 0 auto;
  padding: 0;
  width: 40rem;
  max-width: 90%;
`;

const BookingItem = styled.li`
  margin: 0.5rem 0;
  padding: 0.5rem;
  border: 1px solid #00a5e6;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const bookingList = props => (
  <BookintList>
    {props.bookings.map(booking => {
      return (
        <BookingItem key={booking._id}>
          <div className="bookings__item-data">
            {booking.event.title} -{" "}
            {new Date(booking.createdAt).toLocaleDateString()}
          </div>
          <div className="bookings__item-actions">
            <Button
              className="btn"
              onClick={props.onDelete.bind(this, booking._id)}
            >
              Cancel
            </Button>
          </div>
        </BookingItem>
      );
    })}
  </BookintList>
);

export default bookingList;
