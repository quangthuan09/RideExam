import { atom, createStore } from 'jotai';

export const myStore = createStore();

export const topics = atom([]);
const countAtom = atom(0);
myStore.set(countAtom, 1);
myStore.set(topics, []);
