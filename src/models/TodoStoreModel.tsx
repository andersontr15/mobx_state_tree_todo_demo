import { Instance, types } from "mobx-state-tree";
import { TodoModel, ITodoModel } from "./TodoModel";


export const TodoStoreModel = types
  .model('TodoStoreModel', {
    id: types.identifierNumber,
    selectedTodo: types.maybe(types.reference(TodoModel)),
    todos: types.optional(types.array(TodoModel), [])
  }).actions(self => ({
    createTodo(todo: Omit<ITodoModel, 'id'>) {
      self.todos.push(TodoModel.create({
        ...todo,
        id: self.todos.length ? (self.todos.length + 1).toString() : "1"
      }))
    },
    updateTodo(todo: ITodoModel) {
      self.todos.replace(self.todos.map((td) => {
        if (+td.id === +todo.id) {
          return {
            ...td,
            ...todo,
          }
        }
        return td;
      }))
    },
    deleteTodo(id: number) {
      if (self.selectedTodo && +self.selectedTodo.id === id) {
        self.selectedTodo = undefined;
      }
      self.todos.replace(self.todos.filter(todo => +todo.id !== +id))
    },
    clearSelectedTodo() {
      self.selectedTodo = undefined;
    },
    setSelectedTodo(todo: ITodoModel) {
      self.selectedTodo = todo;
    }
  })).views(self => ({
    get completedTodos() {
      return self.todos.filter(todo => todo.completed)
    },
    get incompleteTodos() {
      return self.todos.filter(todo => !todo.completed)
    }
  }))


export type ITodoStoreModel = Instance<
  typeof TodoStoreModel
>;