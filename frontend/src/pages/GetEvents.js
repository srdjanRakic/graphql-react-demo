import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";

import EventList from "../components/Events/EventList/EventList";

const QUERY = gql`
  query {
    events {
      _id
      title
      description
      date
      price
      creator {
        _id
        email
      }
    }
  }
`;

const GetEvents = ({ authUserId, onViewDetail }) => (
  <Query query={QUERY}>
    {({ data, loading, error }) => {
      if (loading) return <p>Loading</p>;
      if (error) return <p>ERROR</p>;

      const { events } = data;

      return (
        <EventList
          events={events}
          authUserId={authUserId}
          onViewDetail={onViewDetail}
        />
      );
    }}
  </Query>
);

export default GetEvents;