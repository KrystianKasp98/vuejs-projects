<template>
  <div :class="className">
    <input type="text" v-model="inputValue" :class="inputClassName">
    <button type="submit" @click="findCapital" :class="buttonClassName">find</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, defineProps} from "vue";
// https://github.com/johnsoncodehk/volar/issues/460
interface Props {
  name: string,
  findCapital: () => void,
  className: string
}

defineProps<Props>();

export default defineComponent({
  data() {
    return {
      inputClassName: `${this.className}-input`,
      buttonClassName: `${this.className}-button`
    }
  },
  name: "SearchForm",
  props: {
    modelValue: {
      required: true,
      type: String
    },
    findCapital: {
      required: true,
      type: Function
    },
    className: {
      required: true,
      type: String
    }
  },
  computed: {
    inputValue: {
      get():string {
        return this.modelValue;
      },
      set(value: string):void {
        this.$emit('update:modelValue', value)
      }
    }
  }
})
</script>
