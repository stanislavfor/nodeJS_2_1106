<template>
    <div>
        <transition name="fade">
            <div class="alert alert-success" v-show="show">{{ message }}</div>
        </transition>
    </div>
</template>

<script>
export default {
    name: 'Notification',
    data() {
        return {
            message: '',
            show: false
        }
    },
    mounted() {
        this.$root.$on('userWon', this.notify)
    },
    methods: {
        notify: function() {
            this.message = 'Поздравляю!)'
            this.show = true
            setTimeout(() => this.show = false, 3000)
        }
    }
}
</script>

<style>
   .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to {
        opacity: 0;
    }
</style>