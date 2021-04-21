/*
 * Home Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import {
  FETCH_DATA,
  FETCH_DATA_FAILURE,
  FETCH_DATA_SUCCESS,
  SEARCH_RESULTS,
  SORT_RESULTS,
} from '../constants/appConstants';

/**
 * Changes the input field of the form
 *
 * @return {object} An action object with a type of FETCH_DATA
 */
export function fetchData() {
  return {
    type: FETCH_DATA,
  };
}

/**
 * Changes the input field of the form
 *
 * @param  {object} data received in the response
 *
 * @return {object} An action object with a type of FETCH_DATA_SUCCESS
 */
export function fetchDataSuccess(data) {
  return {
    type: FETCH_DATA_SUCCESS,
    data,
  };
}

/**
 * Changes the input field of the form
 *
 * @param  {object} error The new object received as error
 *
 * @return {object} An action object with a type of FETCH_DATA_FAILURE
 */
export function fetchDataFailure(error) {
  return {
    type: FETCH_DATA_FAILURE,
    error,
  };
}

/**
 * Changes the input field of the form
 *
 * @param  {string} query The new text of the input field
 *
 * @return {object} An action object with a type of FETCH_DATA_FAILURE
 */
export function searchResults(query) {
  return {
    type: SEARCH_RESULTS,
    query,
  };
}

/**
 * Changes the input field of the form
 *
 * @param  {string} param either name, date or price
 *
 * @return {object} An action object with a type of FETCH_DATA_FAILURE
 */
export function sortResults(param) {
  return {
    type: SORT_RESULTS,
    param,
  };
}
