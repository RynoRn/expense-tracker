import { createStore } from 'redux';
import throttle from 'lodash/throttle';

import { reducers } from './../reducers';
import { saveState, loadState } from './stateToStorageHandler';

const configureStore = () => {
  const persistedState = loadState();
  const store = createStore(reducers, persistedState);

  store.subscribe(throttle(() => {
    saveState(store.getState());
  }, 1000));

  return store;
};

export default configureStore;
