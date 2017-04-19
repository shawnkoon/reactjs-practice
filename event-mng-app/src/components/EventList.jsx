import * as React from 'react';

export const EventList = (props) => (
  <h1>
    Event : {props.eventObject.event}, Id : {props.eventObject.id}
  </h1>
);