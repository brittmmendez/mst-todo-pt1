import { types } from 'mobx-state-tree';
import Todo from './Todo';
import User from './User';

const RootStore = types
  .model({
    users: types.map(User),
    todos: types.optional(types.map(Todo), {})
  })
  .views(self => ({
    get pendingCount() {
      return self.todos.values().filter(todo => !todo.done).length;
    },
    get completedCount() {
      return self.todos.values().filter(todo => todo.done).length;
    },
    getTodosWhereDoneIs(done) {
      return self.todos.values().filter(todo => todo.done === done);
    }
  }))
  .actions(self => {
    function addTodo(id, name) {
      self.todos.set(id, Todo.create({ name }));
    }

    return { addTodo };
  });

  export default RootStore;