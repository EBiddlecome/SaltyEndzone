import React, { Component } from 'react';

export default class TreeLvl3RightChild8SVG extends Component {
  selectLvl3RightChild8 () {
    console.log('click lvl 3 right child 8');
  }

  render() {
    return  <svg onClick={this.selectLvl3RightChild8}>
              <line className="left-child-line" x1="509" y1="300" x2="475" y2="218" stroke="#F3C7C2" strokeWidth="8" />
              <circle cx="509" cy="300" r="18" stroke="white" strokeWidth="4" fill="#DA523C" />
            </svg>
  }
}