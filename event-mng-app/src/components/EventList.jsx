import * as React from 'react';

export const EventList = (props) => (
  <div className="list-item">
    Id: {props.eventObject.id} | Event: {props.eventObject.event}
  </div>
);