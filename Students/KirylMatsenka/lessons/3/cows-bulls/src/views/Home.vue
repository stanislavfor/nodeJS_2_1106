<template>
  <div class="home">
    <h1 class="mb-4">Играем тут</h1>
    <div class="m-auto w-25">
      <RefreshNumber class="mb-3" />
      <Input class="mb-3" />
      <GameMessage />
    </div>
  </div>
</template>

<script>
import Input from '../components/Input'
import GameMessage from '../components/GameMessage'
import RefreshNumber from '../components/RefreshNumber'

export default {
  name: 'Home',
  components: {
    Input,
    GameMessage,
    RefreshNumber
  }
}
</script>
