let defaultInputsValue = [
  {
    name: "perspective",
    value: {
      min: "0",
      max: "999",
      current: 0,
    },
    unit: "px",
  },
  {
    name: "rotateX",
    value: {
      min: "-180",
      max: "180",
      current: 0,
    },
    unit: "deg",
  },
  {
    name: "rotateY",
    value: {
      min: "-180",
      max: "180",
      current: 0,
    },
    unit: "deg",
  },
  {
    name: "rotateZ",
    value: {
      min: "-180",
      max: "180",
      current: 0,
    },
    unit: "deg",
  },
];

// _ -lodash, it's require to deepCopying our defaultInputsValue instead giving a references

const vm = Vue.createApp({
  data() {
    return {
      inputs: _.cloneDeep(defaultInputsValue),
    };
  },
  methods: {
    resetInputs() {
      this.inputs = _.cloneDeep(defaultInputsValue)
    },
    copyToClipBoard() {
      const boxStyle = `transform: ${document.querySelector(".box").style.transform};`;
      navigator.clipboard.writeText(boxStyle);
      alert(`Copied to clipboard: ${boxStyle}`);
    }
  },
  computed: {
    boxCss() {
      return {
        transform: `
        perspective(${this.inputs[0].value.current}px)
        rotateX(${this.inputs[1].value.current}deg) 
        rotateY(${this.inputs[2].value.current}deg) 
        rotateZ(${this.inputs[3].value.current}deg)`,
      };
    },
  },
}).mount("#app");
