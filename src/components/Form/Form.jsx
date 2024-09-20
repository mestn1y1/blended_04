import { FiSearch } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import { addTodo } from 'reduxTodo/todoSlice';
import { nanoid } from '@reduxjs/toolkit';

import style from './Form.module.css';

export const Form = () => {
  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();

    const todo = {
      text: evt.target.elements.search.value,
      id: nanoid(),
    };

    dispatch(addTodo(todo));
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <button className={style.button} type="submit">
        <FiSearch size="16px" />
      </button>

      <input
        className={style.input}
        placeholder="What do you want to write?"
        name="search"
        required
        autoFocus
      />
    </form>
  );
};
