import { types } from 'mobx-state-tree';

const User = types.model({
    id: types.identifier,
    name: types.optional(types.string, "")
  });

  export default User;