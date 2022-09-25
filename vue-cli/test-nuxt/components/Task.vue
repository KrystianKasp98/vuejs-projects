<template>
  <div class="task">
    <button @click="selfDelete">x</button>
    {{content}}
  </div>
</template>

<script>
export default {
  name: 'Task',
  props: {
    content: String,  
  },
  methods: {
    selfDelete() {
      this.$store.commit("REMOVE_TASK", this.content);
    }
  }
}
</script>