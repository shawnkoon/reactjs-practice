import * as React from 'react';

// Components
import { EventList } from '../components/EventList';

export class EventListContainer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log('event list props --- ', this.props);
    return (
      <ul className="list-group col-sm-4">
        {this.props.events.map((event) => (
          <li key={event.id} className="list-group-item">
            <EventList eventObject={event}/>
            <div className="list-item delete-button" id={event.id} onClick={this.props.deleteFunction}>
              &#x2715;
            </div>
          </li>
        ))}
      </ul>
    );
  }
}