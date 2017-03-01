import React, { Component } from 'react';

const categories = [
  // Expenses
  'Food', 'Coffee', 'Bills', 'Taxi', 'Parking', 'Clothes', 'Lover',
  'Movies', 'Games', 'Travel', 'Sports', 'Doctor', 'Gifts', 'Family',
  'Education', 'Investment', 'Others',
  // Income
  'Salary', 'Award', 'Selling', 'Salary Bonus'
].sort();

export class CategoryList extends Component {
  constructor(props) {
    super(props);

    this.state = { value: categories[0] };
    this.handleSelectChange = this.handleSelectChange.bind(this);
  }

  render() {
    return (
      <select name="expense-category" id="expense-category" value={ this.state.value } onChange={ (event) => this.handleSelectChange(event) }>
        { categories.map(c => {
          return <option key={ c } value={ c }>{ c }</option>
        }) }
      </select>
    );
  }

  handleSelectChange(event) {
    this.setState({ value: event.target.value });
    this.props.onCategoryChange(event.target.value);
  }
}
