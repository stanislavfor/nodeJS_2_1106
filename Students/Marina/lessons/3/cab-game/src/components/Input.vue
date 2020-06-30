<template>
  <div>
    <vue-numeric-input
      v-model="number[0]"
      :min="1"
      :max="9"
      :step="1"
      size="50px"
      controls-type="updown"
    />
    <vue-numeric-input
      v-model="number[1]"
      :min="0"
      :max="9"
      :step="1"
      size="50px"
      controls-type="updown"
    />
    <vue-numeric-input
      v-model="number[2]"
      :min="0"
      :max="9"
      :step="1"
      size="50px"
      controls-type="updown"
    />
    <vue-numeric-input
      v-model="number[3]"
      :min="0"
      :max="9"
      :step="1"
      size="50px"
      controls-type="updown"
    />
    <button @click="checkNumber">Проверить</button>
    <div class="error" v-show="illegalValue">Все числа должны отличаться</div>
  </div>
</template>

<script>
import VueNumericInput from "vue-numeric-input";
import NumberUtils from "../utils/number";

export default {
  name: "Input",
  components: { VueNumericInput },
  data: function() {
    return {
      number: [1, 0, 0, 0],
      illegalValue: false,
    };
  },
  computed: {
    numberAsInt: function() {
      return parseInt(this.number.join(""));
    },
  },
  methods: {
    checkNumber() {
      this.illegalValue = !NumberUtils.isNumberCorrect(this.number);
      if (!this.illegalValue) {
        this.$emit("push-attempt", this.numberAsInt);
      }
    },
  },
};
</script>
