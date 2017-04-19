import * as React from 'react';

// Components
import { EventList } from '../components/EventList';

export class EventListContainer extends React.Component {
  render() {
    console.log('this.props', this.props);
    return (
      <div>
        {this.props.events.map((event, key) => (
          <EventList eventObject={event} key={key}/>
        ))}
      </div>
    );
  }
}