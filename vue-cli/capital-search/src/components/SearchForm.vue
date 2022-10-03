<template>
  <div>
    <input type="text" v-model="inputValue">
    <button type="submit" @click="findCapital">find</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, defineProps} from "vue";
// https://github.com/johnsoncodehk/volar/issues/460
interface Props {
  name: string,
  findCapital: () => void
}

defineProps<Props>();

export default defineComponent({
  name: "SearchForm",
  props: {
    modelValue: {
      required: true,
      type: String
    },
    findCapital: {
      required: true,
      type: Function
    }
  },
  computed: {
    inputValue: {
      get():string | undefined {
        return this.modelValue;
      },
      set(value: string):void {
        this.$emit('update:modelValue', value)
      }
    }
  }
})
</script>
