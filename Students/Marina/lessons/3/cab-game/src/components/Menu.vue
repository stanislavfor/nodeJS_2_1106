<template>
  <div>
    <button @click="$emit('new-game')">Новая игра</button>
    <button @click="$emit('get-stat')">Статистика</button>
  </div>
</template>

<script>
export default {
  name: "Menu",
};
</script>
