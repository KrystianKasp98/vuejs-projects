<template>
  <div class="home">
    <h1 class="capital-app-title">Capital App</h1>
    <form>
      <input type="text" v-model="inputedCountry">
      <button type="submit" @click="find($event)">find</button>
      <p v-if="receivedCapital">{{receivedCapital}}</p>

    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CapitalAPI from "../api/capital"

export default defineComponent({
  name: 'HomeView',
  components: {
  },
  data() {
    return {
      inputedCountry: "",
      receivedCapital: ""
    }
  },
  methods: {
    async find(event: Event) {
      event.preventDefault();
      const res = await CapitalAPI.findCapital(this.inputedCountry);
      this.receivedCapital = res;
    }
  }
});
</script>

<style lang="sass">
  .capital-app-title
    text-align: center
    margin-top: 50px
</style>