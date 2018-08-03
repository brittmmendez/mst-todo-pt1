import { types } from 'mobx-state-tree';
import User from './User';

const Todo = types
  .model({
    name: types.optional(types.string, ""),
    done: types.optional(types.boolean, false),
    user: types.maybe(types.reference(types.late(() => User)))
  })
  .actions(self => {
    function setName(newName) {
      self.name = newName;
    }
    function setUser(user) {
      if (user === "") {
        // When selected value is empty, set as null
        self.user = null;
      } else {
        self.user = user;
      }
    }
    function toggle() {
      self.done = !self.done;
    }

    return { setName, setUser, toggle };
  });

  export default Todo;