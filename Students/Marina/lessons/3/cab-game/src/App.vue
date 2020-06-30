<template>
  <div id="app">
    <Menu @new-game="newGame" @get-stat="getStatistics" />
    <Attempts
      :max-attempts="10"
      :attempts="attempts"
      :secret-number="secretNumber"
    />
  </div>
</template>

<script>
import Menu from "./components/Menu.vue";
import Attempts from "./components/Attempts.vue";
import NumberUtils from "./utils/number";

export default {
  name: "App",
  data: function() {
    return {
      attempts: [],
      secretNumber: NumberUtils.generateSecretNumber(),
    };
  },
  components: {
    Menu,
    Attempts,
  },
  methods: {
    newGame() {
      this.attempts.splice(0, this.attempts.length);
      this.secretNumber = NumberUtils.generateSecretNumber();
    },
    getStatistics() {
      console.log(`statistics`);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
