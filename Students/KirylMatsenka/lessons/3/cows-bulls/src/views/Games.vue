<template>
  <div class="about m-auto">
    <h1>Игры</h1>
    <div class="card m-auto" style="width: 18rem;" :key="key" v-for="(game, key) in games">
      <div class="card-body">
        <h5 class="card-title">{{ game.game }}</h5>
        <p class="card-text">{{ game.message }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
   data() {
     return {
       games: null
     }
   },
   methods: {
     getGames: async function() {
       let res = await fetch('/api/games')
       this.games = await res.json()
     }
   },
   mounted() {
     this.getGames()
   }
}
</script>
