import {
    combine,
    createEffect,
    createEvent,
    createStore,
    restore,
  } from 'effector';
import { IItems } from '../../types';

export const $items = createStore<IItems[]>([]);

export const update = createEvent<IItems>();

