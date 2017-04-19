import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { eventReducer } from './store/reducers';

// Containers
import { ConnectedMainContainer } from './containers/Main';

const store = createStore(eventReducer);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedMainContainer/>
  </Provider>,
  document.getElementById('root')
);