<template>
    <div class="cart-block ">
        <hr>
        <div class="cart-items">
            <li v-for="item of items" :key="item.time">{{item.time}} * Round: {{item.item.round}} pc: {{item.item.pc}} user: {{item.item.user}} bulls: {{item.item.bulls}} cows: {{item.item.cows}}</li>
        </div>
        <hr> </div>
</template>
<script>
    export default {
        data() {
                return {
                    items: []
                }
            },
            mounted() {
                this.get();
            },
            methods: {
                get() {
                    this.$parent.get('/api/game/').then(d => {
                        this.items = d.map(json => JSON.parse(json));
                    })
                }
            },
            updated: function() {
                this.$nextTick(function() {
                    this.get();
                })
            }
    }
</script>
<style>

</style>