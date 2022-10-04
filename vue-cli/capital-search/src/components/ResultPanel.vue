<template>
  <div>
    <p v-if="receivedCapital" :class="receivedClassName">capital: {{receivedCapital}}</p>
    <SpinnerLoader v-else-if="isLoading"/>
    <p v-if="errorMessage" :class="errorMsgClassName">{{errorMessage}}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SpinnerLoader from "./SpinnerLoader.vue";

export default defineComponent({
  data() {
    return {
      receivedClassName: `${this.className}-received`,  
      errorMsgClassName: `${this.className}-error-msg`  
    }
  },
  name: 'ResultPanel',
  components: {
    SpinnerLoader
  },
  props: {
    receivedCapital: String,
    errorMessage: String,
    isLoading: Boolean,
    className: String
  }
})
</script>