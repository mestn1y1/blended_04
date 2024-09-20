import { Text, Grid, Todo } from 'components';
import { useSelector } from 'react-redux';
import { selectFilter } from 'reduxTodo/filterSlice';
import { selectTodos } from 'reduxTodo/todoSlice';

export const TodoList = () => {
  const todos = useSelector(selectTodos);
  const filter = useSelector(selectFilter);
  const visibleTodos = todos.filter(todo =>
    todo.text.toLowerCase().includes(filter.toLowerCase()),
  );

  return (
    <>
      <Grid>
        {visibleTodos.map((todo, index) => {
          return <Todo key={todo.id} item={todo} counter={index + 1} />;
        })}
      </Grid>
      {todos.length === 0 && (
        <Text textAlign="center">We did not find any todo😯</Text>
      )}
    </>
  );
};
