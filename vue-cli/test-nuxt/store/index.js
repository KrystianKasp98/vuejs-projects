export const state = () => ({
  tasks: [],
  users: []
});

export const mutations = {
  ADD_TASK(state, task) {
    state.tasks = [{ content: task, done: false }, ...state.tasks];
  },
  REMOVE_TASK(state, task) {
    state.tasks = state.tasks.filter(item => item.content !== task);
  },
  async GET_USERS(state, users) {
    state.users = users;
  }
}