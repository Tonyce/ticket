import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import thunk from 'redux-thunk';

import * as reducers from './reducers';
import Tickets from './Tickets';

const reducer = combineReducers({
    tickets: reducers.tickets
})
const middleware = [ thunk ]
const store = createStore(
    reducer,
    applyMiddleware(...middleware)
);

ReactDOM.render(
    <Provider store={store}>
        <Tickets />
    </Provider>,
    document.getElementById('app')
)
