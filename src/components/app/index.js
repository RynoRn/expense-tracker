import React, { Component } from 'react';
import { List } from './../../components/list';
import { ActionButtons } from './../../components/action-buttons';
import { Summary } from './../../components/summary';

import './App.css';

export class App extends Component {
  render() {
    return (
      <div className="App layout-wrapper">
        <div className="layout-top">
          <ActionButtons { ...this.props }></ActionButtons>
          <Summary { ...this.props }></Summary>
        </div>
        <div className="layout-bottom">
          <List { ...this.props }></List>
        </div>
      </div>
    );
  }
};

