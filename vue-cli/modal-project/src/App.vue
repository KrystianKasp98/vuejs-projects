<template>
  <div>
    <h1>{{title}}</h1>
    <input type="text" v-model="searchInput" ref="name" placeholder="type an email">
    <button @click="handleClick()" ref="button">click</button>
    <div class="user-wrapper">
      <UserComponent v-for="user in users" :key="user.id" :name="user.name" :username="user.username" :email="user.email" :isVisible="user.email.toLowerCase().includes(searchInput.toLowerCase())" :id="user.id" :deleteUser="deleteUser"/>
    </div>
  </div>
</template>

<script>
import API from "./api";
import UserComponent from "./components/UserComponent.vue";

export default {
  name: 'App',
  data() {
    return {
      title: 'My First Vue App',
      searchInput: '',
      users: []
    }
  },
  methods: {
    handleClick() {
      this.$refs.button.classList.add('active');
      setTimeout(()=>this.$refs.button.classList.remove('active'),450)
    },
    deleteUser(id) {
      this.users = this.users.filter(item => item.id !== id);
    }
  },
  async mounted() {
    this.users = await API.getUsers();
  },
  components: { UserComponent }
}
</script>

<style>
body{
  background-color: grey;
}
@keyframes bump {
  0% {transform: scale(1);}
  50% {transform: scale(1.2);}
  100% {transform: scale(1);}
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.user-wrapper{
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 20px;
  gap: 20px 0;
}
.active{
  animation: bump .45s linear;
}
button{
  cursor: pointer;
}
</style>
