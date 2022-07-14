import React, { PureComponent } from 'react';

export default class Nav extends PureComponent {
  render() {
    return (
      <nav>
        <span className="habit-logo">
          <i className="fa-solid fa-leaf"></i>
        </span>
        <span className="habit-title">Habit-Tracker</span>
        <span className="habit-total">{this.props.counter}</span>
      </nav>
    );
  }
}
