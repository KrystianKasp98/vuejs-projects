const vm = Vue.createApp({
  data() {
    return {
      firstName: "John",
      middleName: "",
      lastName: "Doe",
      url: "https://google.com",
      rawUrl: '<p><a href="https://google.com" target="_blank">Guugol</a></p>',
      age: 20,
    };
  },
  methods: {
    incrementAge() {
      this.age++;
    },
    triggerLastName(msg) {
      // event.preventDefault(); //instead of add this preventing we can code it in html like @input.prevent="updateLastName('triggered string')"
      // console.log(msg);
      // this.lastName = event.target.value;
    },
    updateMiddleName(event) {
      this.middleName = event.target.value;
    },
  },
  computed: {
    fullName() {
      console.log("full name method was called!");
      return `${this.firstName} ${
        this.middleName
      } ${this.lastName.toUpperCase()}`;
    },
  },
  watch: {
    age(newVal, oldVal) {
      setTimeout(() => this.age = 20, 3000);
    }
  }
}).mount("#app");

// setTimeout(() => {
//   vm.firstName = 'Bob'
// }, 2000);

// Vue.createApp({
//   data() {
//     return {
//       firstName: "danny",
//       lastName: "olsen",
//     };
//   },
// }).mount("#app2");