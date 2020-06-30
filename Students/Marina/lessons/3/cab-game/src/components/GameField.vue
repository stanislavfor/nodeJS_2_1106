<template>
    <h1>Игра окончена! {secret_number}</h1>
</template>

<script>
export default {
  name: 'GameField',
  props: {
    win: Boolean,
    secret_number: Number
  }
}
</script>