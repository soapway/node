import React, { Component } from 'react';
import Habit from './habit';
import Input from './input';

class Habits extends Component {
  handleIncrement = (habit) => {
    this.props.incresment(habit);
  };

  handleDecrement = (habit) => {
    this.props.decresment(habit);
  };

  handleDelete = (habit) => {
    this.props.delete(habit);
  };

  handleAdd = (name, max) => {
    this.props.onAdd(name, max);
  };

  handleReset = () => {
    this.props.onReset();
  };

  render() {
    return (
      <>
        <section>
          <Input onAdd={this.handleAdd} />
          <table>
            {this.props.habits.map((habit) => (
              <Habit
                habit={habit}
                key={habit.id}
                onIncrement={this.handleIncrement}
                onDecrement={this.handleDecrement}
                onDelete={this.handleDelete}
              />
            ))}
          </table>
          <button className="resetButton" onClick={this.handleReset}>
            reset
          </button>
        </section>
      </>

      //map 메서드에선 콜백 함수에 {}안에 return을 쓰거나
      //{}가 아니고 ()로 묶어줘야 한다.
      //함수 이름을 지정해주고 그 참조값을 보내게 된다. 함수를 바로 실행하는 거 아님
    );
  }
}

export default Habits;
