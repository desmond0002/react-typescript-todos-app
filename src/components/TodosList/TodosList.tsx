import { useEffect, useState } from 'react';
import { useStore, useList } from 'effector-react';

import { $todos, change, getTodosFx, $usersGet, changeTodosFx } from '../../models/todos';
import { Input, Button, StyledTable, GlobalStyle } from '../../styles/init'

const mockTodo = {
  id: 4,
  status: 'In process',
  text: 'Create Todo App',
};

export const TodosList = () => {
  return (
    <div>
      <Input placeholder="placeholder text" onChange={() => {mockTodo.id = event?.target.value} } />
      <Input onChange={() => {mockTodo.status = event?.target.value} } />
      <Input onChange={() => {mockTodo.text = event?.target.value} } />
      <Button onClick={() => change({id: mockTodo.id, status: mockTodo.status, text: mockTodo.text }) }  >
        Add or Change todo
      </Button>
    </div>
  );
};

export const TodosList2 = () => {
  const { loading, error, data } = useStore($usersGet);

  // useEffect(() => {
  //   getTodosFx();
  // }, []);

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

   return ( <table>
      <thead>
      <tr>
        <th>ID</th>
        <th>Status</th>
        <th>Description</th>
      </tr>
      </thead>

      <tbody>
      { data.map((todo) => {
        return (
          <tr key={todo.id}>
            <td>{todo.id}</td>
            <td>{todo.status}</td>
            <td>{todo.text}</td>
          </tr>
        )
      }) }
      </tbody>
      </table>)

  /*const todoList = data.map((todo) => (
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
  );*/
};