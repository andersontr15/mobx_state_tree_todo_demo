import { onSnapshot } from 'mobx-state-tree';
import { ITodoStoreModel, TodoStoreModel } from './models/TodoStoreModel';
import { generateRandomIntegerFromCrypto } from './utils';

const defaultState = {
  id: generateRandomIntegerFromCrypto(),
  selectedTodo: -1,
  todos: []
};

const createStore = (): ITodoStoreModel => {
  const store = TodoStoreModel.create(defaultState);

  onSnapshot(store, (snapshot) => console.log({ snapshot }));

  return store;
};

export { createStore };
