import * as Redux from 'redux'
import * as ReduxDevtools from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import starsReducer from './reducers/starsReducer'

export type IAppState = ReturnType<typeof starsReducer>

const configureStore = Redux.createStore(
    starsReducer,
    ReduxDevtools.composeWithDevTools(Redux.applyMiddleware(thunk, logger))
)

export default configureStore
