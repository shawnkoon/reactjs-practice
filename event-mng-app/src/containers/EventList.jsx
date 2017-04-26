import * as React from 'react';

// Components
import { EventList } from '../components/EventList';

export class EventListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.deleteEvent = this.deleteEvent.bind(this);
  }
  render() {
    return (
      <ul className="list-group col-sm-10">
        {this.props.events.map((event) => (
          <li key={event.id} className="list-group-item">
            <EventList eventObject={event}/>
            <div className="list-item delete-button" id={event.id} onClick={this.deleteEvent}>
              &#x2715;
            </div>
          </li>
        ))}
      </ul>
    );
  }

  deleteEvent(e) {
    const intID = parseInt(e.target.id, 10);
    this.props.deleteEvent(intID);
  }
}