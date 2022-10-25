<template>
  <div>
    <button type="button" @click="handleFlag()">Toggle</button>
    <!-- 3 classes v-enter-from, v-enter-active, v-enter-to -->
    <transition>
      <h2 v-if="flag">Hello world</h2>
    </transition>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      flag: false
    }
  },
  methods: {
    handleFlag() {
      this.flag = !this.flag;
    }
  }
};
</script>

<style>
body {
  background-color: grey;
}
</style>
