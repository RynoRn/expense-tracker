import { combineReducers } from 'redux';
import { expenses } from './expenses'
import { summary } from './summary'

export const reducers = combineReducers({
  expenses,
  summary
});
