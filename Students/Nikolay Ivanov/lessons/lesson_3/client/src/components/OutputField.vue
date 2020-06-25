<template>
    <ul>
        <OutputItem
           v-for="attempt in attempts"
            v-bind:key="attempt"
            v-bind:attempt="attempt"
        />
        
    </ul>
</template>

<script>
import OutputItem from '@/components/OutputItem'
export default {
    props: ['attempts'],
    components: {
        OutputItem
    }
}
</script>
<style scoped>
    ul {
        list-style: none;
    }
</style>