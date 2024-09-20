import { RiSaveLine } from 'react-icons/ri';
import { MdOutlineCancel } from 'react-icons/md';

import style from './EditForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  changeCurrentTodo,
  selectCurrentTodo,
  updateTodo,
} from 'reduxTodo/todoSlice';

export const EditForm = () => {
  const currentTodos = useSelector(selectCurrentTodo);
  const dispatch = useDispatch();

  const handleChange = e => {
    e.preventDefault();

    dispatch(updateTodo(e.target.elements.text.value));
  };

  return (
    <form className={style.form} onSubmit={handleChange}>
      <input
        className={style.input}
        placeholder="What do you want to write?"
        name="text"
        required
        defaultValue={currentTodos.text}
        autoFocus
      />
      <button className={style.submitButton} type="submit">
        <RiSaveLine color="green" size="16px" />
      </button>

      <button
        className={style.editButton}
        type="button"
        onClick={() => dispatch(changeCurrentTodo(null))}
      >
        <MdOutlineCancel color="red" size="16px" />
      </button>
    </form>
  );
};
