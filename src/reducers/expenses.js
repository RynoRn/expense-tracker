export const expenses = (prevState = [], action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [
        ...prevState,
        action
      ];
    case 'REMOVE_EXPENSE':
      return prevState.filter(exp => exp.id !== action.id);
    default:
      return prevState;
  }
};
