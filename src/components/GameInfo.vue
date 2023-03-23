<template>
  <vCard id="game-info" class="pa-4 mx-auto">
    <vBtn @click="$emit('close')" class="ml-auto" icon="mdi-close" />
    <div>
      <h1>Regras</h1>
      {{ game.rules }}
    </div>
  </vCard>
</template>

<script>
export default {
  props: {
    game: {
      required: true,
      type: Object,
    },
  },
}
</script>

<style>
#game-info {
  max-width: 640px;
}
</style>
