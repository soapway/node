import React, { memo } from 'react';

const Input = memo((props) => {
  const formRef = React.createRef();
  const inputRef = React.createRef();
  const inputRef2 = React.createRef();

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(inputRef.current.value);
    console.log(inputRef2.current.value);

    const name = inputRef.current.value;
    const max = inputRef2.current.value;
    if (name.trim() && max) {
      if (max !== 0) {
        props.onAdd(name, max);
      }
    } else {
      alert('request falied, check again');
    }
    // 이름이 있다면 보내기

    // this.inputRef.current.value = '';
    formRef.current.reset();
    //초기화
  };
  return (
    <form onSubmit={onSubmit} ref={formRef}>
      <label htmlFor="input-habit" className="inputLabel">
        new Habit
      </label>
      <input
        type="text"
        id="input-habit"
        className="inputBox box1"
        ref={inputRef}
        placeholder="add new habit"
      ></input>
      <label htmlFor="max-count" className="inputLabel">
        goal count
      </label>
      <input
        type="number"
        id="max-count"
        className="inputBox box2"
        min="1"
        max="100"
        ref={inputRef2}
      ></input>
      <button className="addButton">Add</button>
    </form>
  );
});

export default Input;
