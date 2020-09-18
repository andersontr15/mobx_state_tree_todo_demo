import { onSnapshot } from 'mobx-state-tree';
import faker from 'faker';
import { ITodoStoreModel, TodoStoreModel } from './models/TodoStoreModel';

const sampleTodos = Array.from({ length: 10 }, () => ({ completed: faker.random.boolean(), name: `Do ${faker.random.words()}`, id: faker.random.number().toString() }))

const defaultState = {
  id: faker.random.number(),
  todos: sampleTodos
};

const createStore = (): ITodoStoreModel => {
  const store = TodoStoreModel.create(defaultState);

  onSnapshot(store, (snapshot) => console.log({ snapshot }));

  return store;
};

export { createStore };
