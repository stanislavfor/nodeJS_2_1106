<template>
    <div class="input-number">
        <form @submit.prevent="onSubmit">
        <input type="text" v-model="number">
        <button type="submit">Проверить</button>
        </form>
        <div class="error">{{this.error}}</div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            number: '',
            error: ''
        }
    }, 
    methods: {
        onSubmit() {
            //console.log('Submit');
            const result = this.number.split('').map(item => +item);
            if(this.checkResult(result)) {
                //console.log(result);
                this.$emit('get-number', result);
                this.error = '';
            } else this.error = 'Число должно быть четырёхзначным и содержать неповторяющиеся цифры';
            this.number = '';
        },
        checkResult(result) {   
            let newArr = result.slice();
            if(result.length != 4) return false;
            for (let i = 0; i < result.length-1; i++) {
                const element = newArr.shift();
                if(newArr.indexOf(element) != -1) return false;
            }
            return true;
        }
    }
}
</script>

<style scoped>
  input {
    margin: 10px;
  }
  .error {
      color: red;
  }
</style>