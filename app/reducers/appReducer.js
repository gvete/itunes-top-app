/*
 * userReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import {
  FETCH_DATA,
  FETCH_DATA_FAILURE,
  FETCH_DATA_SUCCESS,
  SEARCH_RESULTS,
  SORT_RESULTS,
} from '../constants/appConstants';
import { generatePieData, performOperations, simplifyArray } from '../utils/ArrayUtils';

// The initial state of the App
export const initialState = {
  data: [],
  loading: false,
  error: '',
  query: '',
  sortBy: 'Date',
  results: [],
  pieData: [],
  resultsLoading: false,
};

/* eslint-disable default-case, no-param-reassign */
const appsReducer = (state = initialState, action) =>
  produce(state, draft => {
    let resultData = [];
    switch (action.type) {
      case FETCH_DATA:
        draft.loading = true;
        break;
      case FETCH_DATA_SUCCESS:
        draft.loading = false;
        resultData = simplifyArray(action.data);
        draft.data = resultData;
        draft.results = resultData;
        draft.pieData = generatePieData(resultData);
        break;
      case FETCH_DATA_FAILURE:
        draft.loading = false;
        draft.error = action.error;
        break;
      case SEARCH_RESULTS:
        resultData = performOperations(state.data, state.sortBy, action.query);
        draft.results = resultData;
        draft.query = action.query;
        draft.pieData = generatePieData(resultData);
        break;
      case SORT_RESULTS:
        resultData = performOperations(state.data, action.param, state.query);
        draft.results = resultData;
        draft.sortBy = action.param;
        draft.pieData = generatePieData(resultData);
        break;
    }
  });

export default appsReducer;
