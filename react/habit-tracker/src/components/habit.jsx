import React, { PureComponent } from 'react';

class Habit extends PureComponent {
  componentDidMount() {
    console.log(`habit: ${this.props.habit.name} did mount`);
  }
  componentWillUnmount() {
    console.log(`habit: ${this.props.habit.name} will unmount`);
  }

  handleIncreament = () => {
    this.props.onIncrement(this.props.habit);
  };
  // habit을 매개변수로 받기 때문에 매개변수를 넣고 호출한다.
  handleDecreament = () => {
    this.props.onDecrement(this.props.habit);
  };
  handleDelete = () => {
    this.props.onDelete(this.props.habit);
  };

  render() {
    const { name, count } = this.props.habit;
    // props 안에 있는 요소와 같은 이름으로 한번에 변수로 빼내기
    return (
      <li className="habit">
        <span className="habit-name">{name}</span>
        <span className="habit-count">{count}</span>
        <button
          className="habit-button habit-increase"
          onClick={this.handleIncreament}
        >
          <i className="fa-solid fa-square-plus"></i>
        </button>
        <button
          className="habit-button habit-decrease"
          onClick={this.handleDecreament}
        >
          <i className="fa-solid fa-square-minus"></i>
        </button>
        <button
          className="habit-button habit-delete"
          onClick={this.handleDelete}
        >
          <i className="fa-solid fa-trash-can"></i>
        </button>
      </li>
    );
  }
}

export default Habit;
