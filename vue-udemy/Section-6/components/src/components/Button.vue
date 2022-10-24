<template>
  <button @click="sendAlert()">{{name}}</button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    name: String,
    sendAlert: Function
  }
}
</script>