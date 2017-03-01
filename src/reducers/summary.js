export const summary = (prevState = 0, action) => {
  switch (action.type) {
    case 'ADD_SUMMARY':
      return prevState + parseInt(action.value, 10);
    case 'REMOVE_SUMMARY':
      return prevState - parseInt(action.value, 10);
    default:
      return prevState;
  }
};
