<template>
    <div class="game">
        <div v-if="beginSplash">
            <button class="roundbutton" @click="init_game">Начать</button>
        </div>
        <div v-for="num in user_num" :key="num.round + num.num.join('')+computer_num.join('')">
            <div>{{ num.round }}. Вaше число : {{ num.num.join('') }} bulls: {{num.bulls}} cows: {{num.cows}}</div>
        </div>
        <div v-if="!doYouWin & !beginSplash">Подсказка: {{computer_num.join('')}}</div>
        <div class="win-info" v-if="doYouWin">
            <p>{{ win_msg }}</p>
            <p>Загаданное число {{ computer_num.join('') }}</p>
            <button class="roundbutton" @click="init_game">Повторить</button>
        </div>
        <div v-if="!doYouWin">
            <item @trynum="tryNum($event)"></item>
        </div>
    </div>
</template>
<script>
    import item from '../components/ItemGame.vue'
    export default {
        components: {
            item
        },
        data() {
            return {
                items: [],
                url: '/api/game',
                round: 0,
                computer_num: [],
                user_num: [],
                beginSplash: false,
                doYouWin: false,
                win_msg: 'Вы угадали!',
                bulls: 0,
                cows: 0
            }
        },
        created: function() {
            this.beginSplash = true;
        },
        mounted() {},
        methods: {
            tryNum(e) {
                this.compare(Array.from(e.value), this.computer_num);
                this.addLog({
                    round: this.round,
                    pc: this.computer_num.join(''),
                    user: e.value,
                    bulls: this.bulls,
                    cows: this.cows
                });
            },
            compare(num, computer_num) {
                let attempt = {
                    round: ++this.round,
                    num: num,
                    bulls: 0,
                    cows: 0
                }
                for (let i = 0; i < 4; i++) {
                    if (num[i] === computer_num[i]) {
                        attempt.bulls++;
                    } else if (computer_num.indexOf(num[i]) !== -1) {
                        attempt.cows++;
                    }
                }
                this.bulls = attempt.bulls
                this.cows = attempt.cows
                this.user_num.push(attempt);
                if (attempt.round == 10) {
                    this.win_msg = 'Вы проиграли!'
                    this.doYouWin = true;
                }
                if (attempt.bulls == 4) {
                    this.doYouWin = true;
                }
            },
            reset_data() {
                Object.assign(this.$data, this.$options.data());
            },
            init_game() {
                this.reset_data();
                while (this.computer_num.length < 4) {
                    let newNum = Math.floor(Math.random() * 10).toString();
                    if (this.computer_num.indexOf(newNum) < 0) {
                        this.computer_num.push(newNum);
                    }
                }
            },
            addLog(item) {
                console.log(item);
                this.$parent.post('/api/game/', item).then(res => {
                    if (res.id) {}
                });
            }
        }
    }
</script>
<style>

</style>