import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';

import { App } from './../../components/app';
import * as addExpenseAction from './../../actions';

class MainContainer extends Component {
  render() {
    return (
      <div className="main-container">
        <App { ...this.props } />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  expenses: state.expenses,
  summary: state.summary
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(addExpenseAction, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
