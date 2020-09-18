import { Instance, types } from "mobx-state-tree";
import { TodoModel } from "./TodoModel";


export const TodoStoreModel = types
  .model('TodoStoreModel', {
    id: types.identifierNumber,
    selectedTodo: types.reference(TodoModel),
    todos: types.optional(types.array(TodoModel), [])
  })


export type ITodoStoreModel = Instance<
typeof TodoStoreModel
>;