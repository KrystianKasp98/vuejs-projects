<template>
  <div>
    <h1>{{title}}</h1>
    <input type="text" ref="name">
    <button @click="handleClick()">click</button>
    <UserComponent v-for="user in users" :key="user.id" :name="user.name" :username="user.username"/>
  </div>
</template>

<script>
import api from "superagent";
import UserComponent from "./components/UserComponent.vue";

export default {
  name: 'App',
  data() {
    return {
      title: 'My First Vue App',
      users: []
    }
  },
  methods: {
    handleClick() {
      console.log("you've clicked the button!");
    }
  },
  mounted() {
    api
      .get('https://jsonplaceholder.typicode.com/users')
      .set("accept", "json")
      .then(res => this.users = res.body);
  },
  components: { UserComponent }
}
</script>

<style>
body{
  background-color: grey;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
