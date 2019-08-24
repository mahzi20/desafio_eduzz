import * as Redux from 'redux';
import * as ReduxDevtools from 'redux-devtools-extension';
import thunk from 'redux-thunk';

// import postsReducer from './reducers/posts';
// import sendCommentReducer from './reducers/sendComment';

const rootReducer = Redux.combineReducers({
//   posts: postsReducer,
//   sendComment: sendCommentReducer
});

export type IAppState = ReturnType<typeof rootReducer>;

export default function configureStore() {
  return Redux.createStore(
    rootReducer,
    ReduxDevtools.composeWithDevTools(Redux.applyMiddleware(thunk))
  );
}
