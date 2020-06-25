<template>
    <div class="form-group">
        <div>{{ num }}</div>
        <label for="answer">Вводи 4 цифры</label>
        <input v-model="answer" type="email" :class="{'form-control': true, 'is-invalid': hasError}" id="answer" aria-describedby="emailHelp">
        <div class="invalid-feedback" v-show="hasError">{{ validationMessage }}</div>
        <small id="answer" class="form-text text-muted mb-3">Сюда нужно ввести 4 цифры, но хотя дела ваше)</small>
        <button class="btn btn-success" @click="handleClick">Жми</button>
  </div>
</template>

<script>
export default {
    name: 'Input',

    data() {
        return {
            num: '',
            guessResponse: null,
            answer: '',
            hasError: false,
            validationMessage: 'Нужно ввести 4 цифры',
        }
    },
    methods: {
        validate: function() {
            if (this.answer.length > 3) {
                this.hasError = false
                return true
            } else {
                this.hasError = true
                return false
            }
        },

        finishIt: function() {
            let message = `Колличество попыток ${this.guessResponse.counter}`
            let options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({message: message})
            }
            fetch('/api/games', options)
        },

        guess: async function() {
            let options = {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({answer: this.answer})
                }

            let res = await fetch('/guess', options)

            if (res.status === 400) {
                let data = await res.json() 
                this.validationMessage = data.message
                return false    
            }

            this.guessResponse = await res.json() 
            return true
        },

        handleOkResponse: function () {
            this.$root.$emit('gotResponse', this.guessResponse)

            if (this.guessResponse.userWon) {
                this.finishIt()
                this.$root.$emit('userWon')
            }
        },

        handleBadResponse: function() {
            this.hasError = true
        },

        handleClick: async function() {
            if (this.validate()) {
                let guess = await this.guess()
                
                guess ? this.handleOkResponse() : this.handleBadResponse()
                
                console.log (this.guessResponse)
            }
        
            this.answer = ''
        }

    }
}
</script>