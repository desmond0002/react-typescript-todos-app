import { attach, forward, Store } from 'effector';

import { ITodos } from '../../types';

import { $todos,
    change,
    changeTodosFx,
    getTodosFx
  } from '.';

import { updateTodos, getTodos } from '../../api';

changeTodosFx.use(updateTodos);
getTodosFx.use(getTodos);

// Обычный хендлер на обновление хранилища. Добавляем или изменяем пользователя
const updateStore = (state: ITodos[], data: ITodos) => {
  const todosIndex = state.findIndex((todos) => todos.id === data.id);

  // Изменяем стейт
  if (todosIndex > -1) {
    state.splice(todosIndex, 1, data);
  } else {
    state.push(data);
  }

  // Возвращаем измененный стейт
  return [...state];
};

$todos
  .on(change, updateStore)
  .on(getTodosFx.doneData, (_, data) => data);
