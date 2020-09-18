import { Instance, types } from "mobx-state-tree";
import { TodoModel, ITodoModel } from "./TodoModel";


export const TodoStoreModel = types
  .model('TodoStoreModel', {
    id: types.identifierNumber,
    selectedTodo: types.reference(TodoModel),
    todos: types.optional(types.array(TodoModel), [])
  }).actions(self => ({
    createTodo(todo: Omit<ITodoModel, 'id'>) {
      self.todos.push({
        ...todo,
        id: self.todos.length ? self.todos.length + 1 : 1
      })
    }
  }))


export type ITodoStoreModel = Instance<
  typeof TodoStoreModel
>;