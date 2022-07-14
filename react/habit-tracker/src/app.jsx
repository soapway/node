import React, { Component } from 'react';
import './app.css';
import Habits from './components/habits';
import Nav from './components/nav';

class App extends Component {
  state = {
    habits: [
      { id: 1, name: 'Reading', count: 0 },
      { id: 2, name: 'Walking', count: 0 },
      { id: 3, name: 'Cleaning', count: 0 },
    ],
  };

  handleIncrement = (habit) => {
    const habits = this.state.habits.map((item) => {
      if (item.id === habit.id) {
        return { ...habit, count: habit.count + 1 };
      }
      return item;
    });
    console.log(habits);
    this.setState({ habits });
  };

  handleDecrement = (habit) => {
    const habits = this.state.habits.map((item) => {
      if (item.id === habit.id) {
        const count = habit.count - 1;
        return { ...habit, count: count < 0 ? 0 : count };
      }
      return item;
    });
    console.log(habits);
    this.setState({ habits });
  };

  handleDelete = (habit) => {
    const habits = this.state.habits.filter((item) => item.id !== habit.id);
    this.setState({ habits });
  };

  handleAdd = (name) => {
    const newArray = [
      ...this.state.habits,
      { id: this.state.habits.length + 1, name: name, count: 0 },
    ];
    this.setState(() => ({
      habits: newArray,
    }));
  };

  handleReset = () => {
    const habits = this.state.habits.map((habit) => {
      if (habit.count !== 0) {
        return { ...habit, count: 0 };
      }
      return habit;
    });
    this.setState({ habits });
  };

  render() {
    return (
      <>
        <Nav
          counter={this.state.habits.filter((habit) => habit.count > 0).length}
        />
        <Habits
          habits={this.state.habits}
          incresment={this.handleIncrement}
          decresment={this.handleDecrement}
          delete={this.handleDelete}
          onAdd={this.handleAdd}
          onReset={this.handleReset}
        />
      </>
    );
  }
}

export default App;
