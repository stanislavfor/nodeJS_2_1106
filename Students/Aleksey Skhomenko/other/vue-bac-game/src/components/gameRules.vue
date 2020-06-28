<template>
  <div class="text-center">
    <v-dialog
      v-model="dialog"
      width="500"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          large
          dark
          v-bind="attrs"
          v-on="on"
        >
          <v-icon left>mdi-script-text-outline</v-icon> Правила игры
        </v-btn>
      </template>

      <v-card>
        <v-card-title
          primary-title
        >
          Правила игры
        </v-card-title>
        <v-divider />
        <v-card-text>
          <ol class="pt-5 text--primary">
            <li v-for="n in 5" :key="n">
              {{ gameRules[n-1] }}
            </li>
          </ol>
        </v-card-text>

        <v-divider />

        <v-card-actions>
          <v-spacer />
          <v-btn
            dark
            width="200"
            @click="dialog = false"
          >
            ОК
          </v-btn>
          <v-spacer />
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      gameRules: [
        'Компьютер загадывает любое четырёхзначное число (цифры не повторяются).',
        'Вы должны угадывать загаданное число.',
        'Если цифра совпала и находится на нужном месте - это бык.',
        'Если цифра совпала, но расположена не на своем месте - это корова.',
        'Нужно угадать число с 10 попыток.',
      ],
      dialog: false,
    };
  },
};
</script>
