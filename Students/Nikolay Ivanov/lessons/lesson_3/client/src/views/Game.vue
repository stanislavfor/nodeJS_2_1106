<template>
  <div class="game">
    <h2>Игра.</h2>
    <p v-if="win" class="win">Вы угадали с {{attempts.length}} попыток.</p>
    <InputNumber v-else @get-number="getNumber"/>
    <hr>
    <OutputField v-bind:attempts="attempts"/>
    <router-link to="/">На главную</router-link>
  </div>
</template>

<script>
import InputNumber from '@/components/InputNumber'
import OutputField from '@/components/OutputField'
import moment from 'moment'

export default {
  name: 'Game',
  data() {
    return {
      secretNumber: [],
      yourNumber: [],
      attempts: [],
      win: false
    }
  },
  components: {
    InputNumber, OutputField
  },
  mounted() {
    this.secretNumber = this.getSecretNumber();
  },
  methods: {
    getNumber(number) {
      this.yourNumber = number.slice();
      const {bulls, cows} = this.check(this.yourNumber,this.secretNumber);
      const answer = `${number.join('')} - Быки:${bulls} Коровы:${cows}`;
      this.attempts.push(answer);
      if(bulls === 4) {
        this.win = true;
        this.sendToLog(this.win, this.secretNumber.join(''), this.attempts.length);
      };
    },
    getSecretNumber() {
      let result = [];
      let digit;
      for (let i = 0; i < 4; i++) {
          while(result.indexOf(
              digit = Math.floor(Math.random() * 9)) != -1);
          result.push(digit);
      }
      return result;
    },
    check(yourNumber, secretNumber) {
      let answer = {
          cows: 0,
          bulls: 0
      };
      yourNumber.forEach(element => {
          if(secretNumber.indexOf(element) != -1) {
              if(secretNumber.indexOf(element) === yourNumber.indexOf(element))
                  answer.bulls++;
              else
                  answer.cows++;
          }
      });
      return answer;
    },
    sendToLog(isWin, secretNumber, attempts) {
      const time = moment().format('DD.MM.YYYY, hh:mm:ss');
      fetch('/api/log/', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          time,
          isWin,
          secretNumber,
          attempts
        })
      });
    }
  }
}
</script>

<style scoped>
  .win {
    font-size: 24px;
    color: red;
  }
</style>