<template>
  <div>
    <h3>Hey</h3>
    <Greeting :msg="msg" :age="age"/>
    <User :age="age" @age-change="updateAge" :ageChangeFn="updateAgeCB"/>
    <ButtonComponent :name="msg" :sendAlert="sendAlert"/>
  </div>
</template>

<script>
import ButtonComponent from "./components/Button.vue";
import Greeting from "./components/Greeting.vue";
import User from "./components/User.vue";
export default {
  name: "App",
  data() {
    return {
      msg: "Hello World",
      age: 20
    };
  },
  methods: {
    sendAlert() {
      alert('Calling method from app');
    },
    updateAge(num) {
      this.age += num;
    },
    updateAgeCB(num) {
      this.age += num;
    }
  },
  components: { ButtonComponent, Greeting, User },
};
</script>
