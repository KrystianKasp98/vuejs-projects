<template>
  <div class="user user-animation" v-if="isVisible" ref="userCard">
    <img class="user-photo" src="../assets/profile-photo.png" alt="user">
    <p>Fullname: {{name}}</p>
    <p>Nick: {{username}}</p>
    <p>Email: {{email}}</p>
    <button @click="selfDelete()">x</button>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    username: String,
    email: String,
    isVisible: Boolean,
    id: Number,
    deleteUser: Function,
  },
  methods: {
    selfDelete() {
      this.$refs.userCard.classList.add('user-card-removed');
      setTimeout(() => {
        this.deleteUser(this.id);
      }, 950)
    }
  },
}
</script>

<style>
  @keyframes remove-slide {
    0% {transform: translateX(0);}
    100% {
      transform: translateX(-1500px);
      opacity: 0.15;
    }
  }
  @keyframes drop-down{
    0% {transform: translateY(-4000px);}
    100% {transform: translateY(0);}
  }
  .user {
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
    width: 200px;
    height: 250px;
    padding: 15px;
    box-sizing: border-box;
    font-size: 12px;
    border-radius: 20px;
    background-color: rgba(133, 134, 231, 0.678);
    box-shadow: 0px 0px 24px 0px rgba(66, 68, 90, 1);
  }
  .user-animation{
    animation: drop-down .95s;
  }
  .user-photo{
    height: 64px;
    width: 64px;
    border-radius: 50%;
  }
  .user-card-removed{
    animation: remove-slide .85s;
  }
</style>