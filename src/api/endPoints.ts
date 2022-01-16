import { ITodos } from 'types';
import { axios } from './axios';

export const getTodos = async (): Promise<ITodos[]> => {
  const res = await axios({
    url: '/todos',
    method: 'GET',
  });
  return res.data;
}

export const updateTodos = async (data: ITodos): Promise<ITodos> => {
  const res = await axios({
    url: `/todos/${data.id}`,
    method: 'PATCH',
  });
  return res.data;
}
