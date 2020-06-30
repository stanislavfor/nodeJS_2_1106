<template>
  <div>
    <p>Попыток {{ maxAttempts - attempts.length }} / {{ maxAttempts }}</p>
    <table v-show="attempts.length > 0">
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

    <Input @push-attempt="pushAttempt" v-show="!gameOver" />
    <p v-show="gameOver">
      Игра окончена! Вы
      <span v-show="win">выиграли</span>
      <span v-show="!win">проиграли. Загаданное число {{ secretNumber }}</span>
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
    attempts: Array,
    secretNumber: Number,
  },
  components: { Input },
  data: function() {
    return {};
  },
  computed: {
    gameOver: function() {
      let end = this.attempts.length === this.maxAttempts || this.win;
      if (end) {
        console.log(
          `end do post ${JSON.stringify({
            attempts: this.attempts.length,
            secret_number: this.secretNumber,
            win: this.win,
          })}`
        );
        fetch("/api/sendStat", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            attempts: this.attempts.length,
            secret_number: this.secretNumber,
            win: this.win,
          }),
        });
      }
      return end;
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
