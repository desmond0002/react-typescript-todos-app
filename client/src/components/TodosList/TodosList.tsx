import { useEffect, useState } from 'react';
import { useStore, useList } from 'effector-react';

import { $todos, change, getTodosFx, $usersGet, changeTodosFx } from '../../models/todos';
import styled from 'styled-components'

const mockTodo = {
  id: 4,
  status: 'In process',
  text: 'Create Todo App',
};

const Button = styled.button`
  margin: 0.5em;
  padding: 0.5em 0;
  width: 200px;
  background: ${(props) =>
    props.primary ? '#337ab7' : '#f0f0f0f'};
  outline: none;
  border: none;
  border-radius: 4px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.25);
  font-family: Audiowide;
  font-size: 1em;
  letter-spacing: 2px;
  text-transform: lowercase;
  color: ${(props) =>
    props.primary ? '#f0f0f0' : '#1c1c1c'};
  cursor: pointer;
  user-select: none;
  transition: 0.2s;

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    box-shadow: none;
  }
`;

const Input = styled.input.attrs((props) => ({
  type: 'text',
  placeholder: 'Some text...',
  size: props.size || '1em',
}))`
  border: none;
  border-radius: 4px;
  box-shadow: 0 0 2px inset rgba(0, 0, 0, 0.5);
  font-family: Audiowide;
  font-size: ${(props) => props.size};
  text-align: center;
  color: rgba(0, 0, 0, 0.5);
  margin: 0.5rem;
  padding: 0.5rem 0;
`;

export const TodosList = () => {
  return (
    <div>
      <Input placeholder="placeholder text" onChange={() => {mockTodo.id = event?.target.value} } />
      <Input onChange={() => {mockTodo.status = event?.target.value} } />
      <Input onChange={() => {mockTodo.text = event?.target.value} } />
      <Button onClick={() => change(mockTodo)}>
        Add or Change todo
      </Button>
    </div>
  );
};

export const TodosList2 = () => {
  const { loading, error, data } = useStore($usersGet);

  useEffect(() => {
    getTodosFx();
  }, []);

  if (loading) {
    return (
      <div>Loading...</div>
    );
  }
  if (error) {
    return (
      <div>
        <span><b>Error: </b></span>
        <span>{error.message}</span>
      </div>
    );
  }

  const todoList = data.map((todo) => (
    <div key={todo.id}>
      <div>ID: {todo.id}</div>
      <div>Status: {todo.status}</div>
      <div>Description: {todo.text}</div>
      <br/>
    </div>
  ));

  return (
    <div>
      {todoList}
    </div>
  );
};