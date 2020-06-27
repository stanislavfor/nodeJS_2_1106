<template>
    <div>
        <button class="btn btn-primary" @click="refresh">Загадать новую цифру</button>
        <transition name="fade">
            <div class="text-muted" v-show="showMessage">{{ message }}</div>
        </transition>
    </div>
</template>

<script>
export default {
    name: 'RefreshNumber',
    data() {
        return {
            message: '',
            showMessage: false
        }
    },
    methods: {
        refresh: async function() {
            let options = {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },                    
                }

            let response = await fetch('/generate', options)
            let data = await response.json()
            
            if(response.status === 200 && data.message) {
                this.message = data.message 
            } else {
                this.message = 'Число не сгенерировано почему то'
            }

            this.showMessage = true
            setTimeout(() => this.showMessage = false, 2000)
        }
    }
}
</script>

<style>
   .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to  {
        opacity: 0;
    }
</style>