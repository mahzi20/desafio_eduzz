import * as Redux from 'redux';
import * as ReduxDevtools from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducer from './reducers/starsReducer';
import { IState } from './reducers/types';

const INITIAL_STATE: IState = {
  isFetching: false,
  hasErrors: false,
  starsInfo: []
};

const configureStore = Redux.createStore(
    reducer,
    INITIAL_STATE,
    ReduxDevtools.composeWithDevTools(Redux.applyMiddleware(thunk, logger))
);

export default configureStore;