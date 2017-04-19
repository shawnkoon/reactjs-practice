import * as React from 'react';
import { connect } from 'react-redux';

// Contianers & Components
import { Main } from '../components/Main';
import { EventListContainer } from '../containers/EventList';

// Styles
import {
  Button,
  FormControl,
  FormGroup,
} from 'react-bootstrap';
import '../styles/Main.css';

// Actions
import * as actions from '../store/actions';

export class MainContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.addEvent = this.addEvent.bind(this);
  }

  render() {
    return (
      <div className="App">
        <Main/>
        <div className="form-inline">
          <FormGroup bsSize="large">
            <FormControl
              type="text"
              placeholder="Event Name..."
              onChange={this.handleChange}
              />
          </FormGroup>
          <Button
            bsStyle="warning"
            bsSize="large"
            onClick={this.addEvent}
          >
            Add Event
          </Button>
        </div>
        <EventListContainer {...this.props}/>
      </div>
    );
  }

  handleChange(event) {
    this.setState(
      {
        text: event.target.value.trim(),
      }
    );
  }

  addEvent() {
    this.props.addEvent(this.state.text);
  }
}

const mapStateToProps = (state) => (
  {...state}
);

const mapDispatchToProps = (dispatch) => (
  {
    addEvent: (event) => {
      dispatch(actions.addEvent(event))
    },
  }
);

export const ConnectedMainContainer = connect(mapStateToProps, mapDispatchToProps)(MainContainer);