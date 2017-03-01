import React from 'react';
import { Provider } from 'react-redux';

import MainContainer from './../main-container';

const Root = ({ store }) => {
  return (
    <Provider store={ store }>
      <MainContainer />
    </Provider>
  );
};

export default Root;