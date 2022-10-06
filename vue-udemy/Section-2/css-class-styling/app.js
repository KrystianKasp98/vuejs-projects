let vm = Vue.createApp({
  data() {
    return {
      isPurple: false,
      selectedColor: "",
      size: 150
    };
  },
  computed: {
    circle_classes() {
      return { purple: this.isPurple };
    },
    color_classes(newVal) {
      return {
        [`${this.selectedColor}`]: true,
      };
    },
    size_css() {
      return {
        width: `${this.size}px`,
        height: `${this.size}px`,
        transform: `rotate(${this.size - 150}deg)`
      }
    }
  },
  watch: {
    selectedColor(newVal, oldVal) {
      console.log('yt werks');
    }
  },
}).mount("#app");