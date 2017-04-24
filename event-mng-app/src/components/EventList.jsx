import * as React from 'react';

export const EventList = (props) => (
  <div className="list-item">
    Event : {props.eventObject.event}, Id : {props.eventObject.id}
  </div>
);