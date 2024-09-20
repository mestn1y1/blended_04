import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, selectFilter } from 'reduxTodo/filterSlice';

import style from './Filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleChange = e => {
    e.preventDefault();
    dispatch(changeFilter(e.target.value));
  };
  return (
    <input
      className={style.input}
      placeholder="Find it"
      name="filter"
      value={filter}
      onChange={handleChange}
    />
  );
};
