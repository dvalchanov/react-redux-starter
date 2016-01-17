import {Map} from "immutable";
//import actionTypes from "js/actions/actionTypes";

/**
 * Initial state to for this reducer.
 */
const initialState = Map();

/**
 * Default Reducer
 */
export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
