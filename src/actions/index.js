import { v4 } from 'node-uuid';

export const addExpense = ({ category, value }) => ({
    type: 'ADD_EXPENSE',
    id: v4(),
    category,
    value,
    createdAt: (new Date()).getTime()
});

export const removeExpense = (id) => ({
  type: 'REMOVE_EXPENSE',
  id
});

export const addSummary = (value) => ({
  type: 'ADD_SUMMARY',
  value
});

export const removeSummary = (value) => ({
  type: 'REMOVE_SUMMARY',
  value
});
