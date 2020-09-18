import { Instance, types } from "mobx-state-tree";


export const TodoModel = types
  .model('TodoModel', {
    id: types.identifier,
    name: types.string,
    completed: types.boolean,
  })


export type ITodoModel = Instance<
typeof TodoModel
>;