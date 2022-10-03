<template>
  <div class="home">
    <h1 class="home__title">Capital App</h1>
    <form class="home__form"> 
      <SearchForm v-model="inputedCountry" :findCapital="find"/>

      <p v-if="receivedCapital">{{receivedCapital}}</p>
      <SpinnerLoader v-else-if="isLoading"/>
      <p v-if="errorMessage">{{errorMessage}}</p>

    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CapitalAPI from "../api/capital";
import SpinnerLoader from "../components/SpinnerLoader.vue";
import SearchForm from "../components/SearchForm.vue";

export default defineComponent({
  name: 'HomeView',
  components: {
    SpinnerLoader,
    SearchForm
  },
  data() {
    return {
      inputedCountry: "",
      receivedCapital: "",
      errorMessage: "",
      isLoading: false
    }
  },
  methods: {
    async find(event: Event) {
      this.isLoading = true;
      this.receivedCapital = "";
      event.preventDefault();
      try {
        const res = await CapitalAPI.findCapital(this.inputedCountry);
        res ? this.receivedCapital = res : this.errorMessage = `Can not find capital for ${this.inputedCountry} country`
      } catch (err) {
        this.errorMessage = "Server problem"
      } finally {
        this.isLoading = false;
        setTimeout(() => this.errorMessage="",2000)
      }
    }
  }
});
</script>

<style lang="sass">
  .home__title
    text-align: center
    margin-top: 50px
</style>