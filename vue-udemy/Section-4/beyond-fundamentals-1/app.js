let vm = Vue.createApp({
  data() {
    return {
      message: "Hello world!"
    }
  }
});
vm.mount('#app');
// setTimeout(() => vm.unmount(), 3000); // unmount vue app from DOM