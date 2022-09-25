<template>
  <main>
    <h1>Task Board</h1>
    <p>Create a list of tasks</p>

    <div class="create-new">
      <input
        type="text"
        v-model="newTask"
        placeholder="Add a new task..."
        @keypress.enter="addTask"
      />
      <button @click="addTask">Add</button>
    </div>
    <button @click="fetchUsersData">refresh data</button>

    {{$store.state.users}}
    <div class="tasks">
      <Task v-for="task in $store.state.tasks" :key="task.content" :content="task.content"/>
    </div>
  </main>
</template>

<script>
import API from '~/api';
export default {
  name: "IndexPage",
  data() {
    return {
      newTask: "",
    };
  },
  methods: {
    addTask() {
      if (this.newTask) {
        console.log(this.newTask);
        this.$store.commit("ADD_TASK", this.newTask);
        this.newTask = "";
      }
    },
    async fetchUsersData() {
      const users = await API.getUsers();
      this.$store.commit("GET_USERS", users);
    }
  },
  async fetch() {
    this.fetchUsersData();
  }
};
</script>
