<template>
  <div>
    <p>Fullname: {{name}}</p>
    <p>Nick: {{username}}</p>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    username: String
  }
}
</script>

<style scoped>
  div {
    width: 200px;
    height: 200px;
    background-color: grey;
  }
</style>