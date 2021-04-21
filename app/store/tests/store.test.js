/**
 * Test store addons
 */

import { browserHistory } from 'react-router-dom';
import configureStore from '../configureStore';

describe('configureStore', () => {
  let store;

  beforeAll(() => {
    store = configureStore({}, browserHistory);
  });

  describe('runSaga', () => {
    it('should contain a hook for `sagaMiddleware.run`', () => {
      expect(typeof store.runSaga).toBe('object');
    });
  });
});
