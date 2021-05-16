import { combineReducers } from 'redux';
import formVisibleReducer from "./form-visible-reducer";
import artListReducer from "./art-list-reducer";
import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({
  formVisibleOnPage: formVisibleReducer,
  firestore: firestoreReducer
});

export default rootReducer;