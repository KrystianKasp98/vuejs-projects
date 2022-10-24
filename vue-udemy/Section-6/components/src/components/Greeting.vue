<template>
  <div>
    <p v-if="age >= 25">{{ msg }}</p>
    <p v-else>You must be 25 years or older to view this message</p>
  </div>
</template>

<script>
export default {
  name: "Greeting",
  props: {
    msg: String,
    age: Number
  }
};
</script>

<style lang="sass" scoped>
p
  font-size: 2rem
  color: #c44
  &:hover
    color: darken(#c44,15%)
</style>