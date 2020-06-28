<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
      right
    >
      <v-list>
        <v-list-item>
          Список ходов:
        </v-list-item>
        <v-list-item v-if="!turns.length">
          Сделайте первый ход.
        </v-list-item>
        <v-list-item v-for="data of turns" :key="data.turn">
          <v-list-item-content class="py-2">
            <v-list-item-title>
             <b> Ход {{ data.turn }} </b> - {{ data.date }}
            </v-list-item-title>
            Попытка: {{ data.text }}, Б: {{ data.bulls || 0 }}, К: {{ data.cows || 0 }}
            {{ data.win ? '\nПОБЕДА!' : '' }}
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      dark
    >
      <v-spacer />
      <v-col cols="12" md="5" sm="5">
        <v-toolbar-title>
          <v-icon left>mdi-gamepad-variant-outline</v-icon> Игра Быки и Коровы
        </v-toolbar-title>
      </v-col>

      <v-col cols="12" md="2" sm="3">
        <v-btn class="pa-0" block @click.stop="drawer = !drawer">
          <v-icon left>mdi-history</v-icon> История ходов
        </v-btn>
      </v-col>
    </v-app-bar>

    <v-main>
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col cols="6" md="2" class="text-center">
            <game-rules />
          </v-col>
          <v-col v-if="!isPlaying" cols="6" md="2" class="text-center">
            <v-btn large dark @click.stop="play">
              <v-icon left>mdi-ray-start-arrow</v-icon> Начать игру
            </v-btn>
          </v-col>
        </v-row>
        <v-row v-if="turns.length && isPlaying" class="text-center">
          <v-spacer />
          <v-col cols="12" md="2">
            <v-icon left>mdi-check-all</v-icon> <p>Быки: {{ turns[turns.length-1].bulls }}</p>
          </v-col>
          <v-col cols="12" md="2">
            <v-icon left>mdi-cow</v-icon> <p>Коровы: {{ turns[turns.length-1].cows }}</p>
          </v-col>
          <v-spacer />
        </v-row>
        <v-row v-else-if="win" class="text-center">
          <v-col cols="12" md="6"><p>Победа!</p></v-col>
        </v-row>
        <v-row v-else><v-col cols="12" md="6"><p/></v-col></v-row>
        <form v-if="isPlaying" @submit="submit" class="my-form">
          <v-row
            align="center"
            justify="center"
          >
            <v-col cols="4" md="4" class="text-center">
              <v-text-field
                v-model="inputValue"
                class="game-input"
                ref="input"
                height="50px"
                :rules="[rules.counter, rules.unique]"
                label="Угадайте 4-значное число"
                color="green darken-2"
                hide-details="auto"
              />
            </v-col>
          </v-row>
          <v-row
            align="center"
            justify="center"
          >
            <v-col cols="6" md="2" class="text-center">
              <v-btn large dark @click.stop="submit">
                <v-icon left>mdi-keyboard-return</v-icon> Проверить
              </v-btn>
            </v-col>
          </v-row>
        </form>
        <v-row v-if="isPlaying"
          align="center"
          justify="center"
        >
          <v-col cols="6" md="2" class="text-center mx-5">
            <v-btn large dark @click.stop="play">
              <v-icon left>mdi-reload</v-icon> Начать заново
            </v-btn>
          </v-col>
          <v-col cols="6" md="2" class="text-center mx-5">
            <v-btn large dark @click.stop="surrend">
              <v-icon left>mdi-anchor</v-icon> Сдаться
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-main>

    <v-footer
      app
      dark
    >
      <v-spacer />
      <span class="white--text">Алексей Схоменко &copy; 2020</span>
      <v-spacer />
    </v-footer>
  </v-app>
</template>

<script>
import gameRules from './components/gameRules.vue';

const dayjs = require('dayjs');

export default {
  name: 'App',
  components: {
    'game-rules': gameRules,
  },
  props: {
    source: String,
  },
  data: () => ({
    drawer: false,
    isPlaying: false,
    turns: [],
    inputValue: '',
    formHasErrors: false,
    secret: '',
    win: false,
    rules: {
      unique: (value) => {
        for (let i = 0; i < value.length - 1; i += 1) {
          if (value.indexOf(value[i], i + 1) >= 0) {
            return 'Введите число без повторов!';
          }
        }
        return true;
      },
      counter: (value) => value.length === 4 || 'Введите 4-значное число.',
    },
  }),
  methods: {
    play() {
      if (!this.isPlaying) {
        this.isPlaying = true;
        this.turns = [];
        this.win = false;
        this.secret = this.generator();
      }
    },
    surrend() {
      if (this.isPlaying) {
        this.isPlaying = false;
        this.turns.push({
          turn: this.turns.length + 1,
          text: 'СДАЛСЯ',
          date: dayjs().format('DD.MM.YY HH:mm:ss'),
        });
      }
    },
    submit() {
      ((input) => {
        setTimeout(() => {
          input.focus();
        }, 600);
      })(this.$refs.input);

      let res;
      let win;
      if (this.rules.unique(this.inputValue) + this.rules.counter(this.inputValue) === 2) {
        res = this.check_result();
        win = !!res.win;

        this.turns.push({
          turn: this.turns.length + 1,
          text: this.inputValue,
          ...res,
          date: dayjs().format('DD.MM.YY HH:mm:ss'),
        });
        this.inputValue = '';

        if (win) {
          console.log('upload logs;');
          this.win = true;
          this.isPlaying = false;
        }
      }
    },
    generator() {
      const base = [...'0123456789'];
      let res = '';
      let n;

      while (res.length < 4) {
        n = Math.floor(Math.random() * 10);
        res += base.splice(n, 1);
      }
      return res;
    },
    check_result() {
      let bulls = 0;
      let cows = 0;
      for (let i = 0; i < this.secret.length; i += 1) {
        if (this.inputValue[i] === this.secret[i]) {
          bulls += 1;
        } else if (this.secret.indexOf(this.inputValue[i]) >= 0) {
          cows += 1;
        }
      }
      console.log('input', this.inputValue, 'secret', this.secret);
      console.log('bulls', bulls, 'cows', cows);
      return (bulls === this.secret.length) ? { win: 1 } : { bulls, cows };
    },
  },
};
</script>

<style>
.my-form {
  width: 100%;
  max-height: fit-content;
}
.game-input input {
    font-size: 2em;
    text-align: center;
};
.game-input label {
  font-size: "50px";
  line-height: "100px";
}
</style>
