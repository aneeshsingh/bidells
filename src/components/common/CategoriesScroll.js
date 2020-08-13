import React, { Component } from 'react';
import ScrollMenu from 'react-horizontal-scrolling-menu';

// selected prop will be passed
const MenuItem = ({ text, selected }) => {
    return (
      <div
        className="menu-item"
      >
        {text}
      </div>
    );
  };

class CategoriesScroll extends Component {

    state = {
        selected: 0,
        list: []
      };
      
    onSelect = key => {
        this.setState({ selected: key });
    }
    render() {
        const { selected } = this.state;
        // Create menu from items
        const menu = Menu(list, selected);

        return (
            <ScrollMenu
                data={menu}
                selected={selected}
                onSelect={this.onSelect}
            />
        );
    }
}

export default CategoriesScroll;