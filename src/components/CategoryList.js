import React from 'react';
import { DropDownMenu, MenuItem } from 'material-ui';

export const CategoryList = ({ categories, category, onCategoryChange }) => (
  <DropDownMenu
    value={ category }
    onChange={ onCategoryChange }
    autoWidth={ false }
    style={ { width: 200 } }
    menuItemStyle={ { textAlign: 'center', minHeight: '40px', lineHeight: '40px' } }>
    { categories.map(c => <MenuItem key={ c } value={ c } primaryText={ c } />) }
  </DropDownMenu>
);

CategoryList.propTypes = {
  categories: React.PropTypes.array.isRequired,
  category: React.PropTypes.string.isRequired,
  onCategoryChange: React.PropTypes.func.isRequired
};
