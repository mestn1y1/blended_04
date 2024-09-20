import { Section, Container, Header, Text, Form, TodoList } from 'components';
import { useSelector } from 'react-redux';
import { selectTodos } from 'reduxTodo/todoSlice';
export const App = () => {
  const todos = useSelector(selectTodos);
  return (
    <>
      <Header />
      <Section>
        <Container>
          <Form />
          {todos.length > 0 ? (
            <TodoList />
          ) : (
            <Text textAlign="center">Create your first todo😉</Text>
          )}
        </Container>
      </Section>
    </>
  );
};
