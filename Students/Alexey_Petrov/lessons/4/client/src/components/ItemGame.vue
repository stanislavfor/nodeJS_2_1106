<template>
    <div>
        <div class="message" v-if="msg">{{ msg }}</div>
        <div>
            <form @submit.prevent="submit">
                <input type="text" :maxlength="4" v-model="inputNum">
                <button type="submit">Проверить</button>
            </form>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
                return {
                    inputNum: '',
                    msg: ''
                };
            },
            methods: {
                submit() {
                    if (this.check(this.inputNum)) {
                        this.$emit('trynum', {
                            value: this.inputNum
                        });
                        this.inputNum = '';
                    } else {
                        this.msg = 'Число должно состоять из 4-х неповторяющихся цифр';
                        setTimeout(() => {
                            this.msg = ''
                        }, 2000);
                        this.inputNum = '';
                    }
                },
                check(num) {
                    if (!isNaN(num) && num.toString().length == 4) {
                        if (Array.from(num).reduce((a, b) => {
                                if (a.indexOf(b) < 0) a.push(b);
                                return a;
                            }, []).length == 4) {
                            return true;
                        }
                    }
                    return false;
                }
            },
    }
</script>
<style>

</style>