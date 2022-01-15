import {
    combine,
    createEffect,
    createEvent,
    createStore,
    restore,
  } from 'effector';
import { ITodos } from '../../types';

export const $todos = createStore<ITodos[]>([]);

export const change = createEvent<ITodos>();


export const getTodosFx = createEffect<void, ITodos[], Error>();
export const changeTodosFx = createEffect<ITodos, ITodos, Error>();

export const $fetchError = restore<Error>(getTodosFx.failData, null);

// Создаем другое хранилище, содержащий всю информацию по GET-запросу
export const $usersGet = combine({
  loading: getTodosFx.pending,
  error: $fetchError,
  data: $todos,
});