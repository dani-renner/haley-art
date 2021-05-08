import { combineReducers } from 'redux';
import formVisibleReducer from "./form-visible-reducer";

const rootReducer = combineReducers({
  formVisibleOnPage: formVisibleReducer
});

export default rootReducer;