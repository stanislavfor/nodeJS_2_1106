<template>
    <div class="h4">{{ message }}</div>
</template>

<script>
export default {
    name: 'GameMessage',
    data() {
        return {
            message: ''
        }
    },
    mounted() {
        this.$root.$on('gotResponse', this.setMessage)
    },
    methods: {
        setMessage: function(response) {
            this.message = response.message
        }
    }
}
</script>