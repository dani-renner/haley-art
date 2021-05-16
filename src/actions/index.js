import * as c from './../actions/ActionTypes';
export const toggleForm = () => ({
  type: c.TOGGLE_FORM
});
export const deleteArt = id => ({
  type: c.DELETE_ART,
  id
});