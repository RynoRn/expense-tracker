import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';

import { App } from './../../components/app';
import * as actions from './../../actions';

const MainContainer = (props) => (
  <div className="main-container">
    <App { ...props } />
  </div>
);

const mapStateToProps = state => ({
  expenses: state.expenses,
  summary: state.summary
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);

//
// Alternative solution:
//
// import { addExpense } from './../../actions';
// const mapDispatchToProps = dispatch => ({
//   onAddExpenseClick(params) {
//     dispatch(addExpense(params))
//   }
// });
//
// EQUALS with passing the following object instead of `mapDispatchToProps`
// { onAddExpenseClick: addExpense }
//