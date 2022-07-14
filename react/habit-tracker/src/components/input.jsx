import React, { memo } from 'react';

const Input = memo((props) => {
  const formRef = React.createRef();
  const inputRef = React.createRef();

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(inputRef.current.value);
    const name = inputRef.current.value;
    name && props.onAdd(name);
    // 이름이 있다면 보내기
    // this.inputRef.current.value = '';
    formRef.current.reset();
    //초기화
  };
  return (
    <form onSubmit={onSubmit} ref={formRef}>
      <label htmlFor="input-habit" className="inputLabel">
        Type new Habit
      </label>
      <input
        type="text"
        id="input-habit"
        className="inputBox"
        ref={inputRef}
      ></input>
      <button className="addButton">Add</button>
    </form>
  );
});

export default Input;
