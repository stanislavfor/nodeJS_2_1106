<template>
  <div>
    <p>Попыток {{ maxAttempts - attempts.length }} / {{ maxAttempts }}</p>
    <table>
      <tr>
        <th>Попытка</th>
        <th>Число</th>
        <th>Быки</th>
        <th>Коровы</th>
      </tr>
      <tr v-for="attempt in attempts" v-bind:key="attempt.id">
        <td>{{ attempt.id }}</td>
        <td>{{ attempt.number }}</td>
        <td>{{ attempt.bulls }}</td>
        <td>{{ attempt.cows }}</td>
      </tr>
    </table>

    <Input @push-attempt="pushAttempt" v-show="gameOver" />
    <p v-show="!gameOver">
      Игра окончена! Вы <span v-show="win">выиграли</span
      ><span v-show="!win">проиграли</span>
    </p>
  </div>
</template>

<script>
import Input from "./Input.vue";
import NumberUtils from "../utils/number";

export default {
  name: "Attempts",
  props: {
    maxAttempts: Number,
  },
  components: { Input },
  data: function() {
    return {
      attempts: [],
      secretNumber: NumberUtils.generateSecretNumber(),
    };
  },
  computed: {
    gameOver: function() {
      return this.attempts.length < this.maxAttempts;
    },
    win: function() {
      return this.attempts.length === 0
        ? false
        : this.attempts[this.attempts.length - 1].bulls === 4;
    },
  },
  methods: {
    pushAttempt(number) {
      let newId = this.attempts.length + 1;
      let compare = NumberUtils.compareNumbers(number, this.secretNumber);
      this.attempts.push({
        id: newId,
        number: number,
        cows: compare.cows,
        bulls: compare.bulls,
      });
    },
  },
};
</script>
