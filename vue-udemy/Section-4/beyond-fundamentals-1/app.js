// app using compiler
let vm = Vue.createApp({
  data() {
    return {
      message: "Hello world!"
    }
  },
  components: ['hello']
});
// setTimeout(() => vm.unmount(), 6000); // unmount vue app from DOM

vm.component('hello', {
  template: `<div>{{message}}</div>`,
  data() {
    return {
      message: 'Hello there'
    }
  }
});

vm.mount('#app');
// app manualy use object
// let vm2 = Vue.createApp({
//   data() {
//     return {
//       message: "Hello world!",
//     };
//   },
//   render() {
//     return Vue.h(
//       'h1',
//       this.message
//     )
//   }
// }).mount('#app2');


