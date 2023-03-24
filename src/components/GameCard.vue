<template>
  <vCard>
    <vImg class="teste" :src="require(`@/assets/img/${gameImageName}.jpg`)">
      <div class="position-relative game-footer text-white pa-2 d-flex flex-column">
        <vIcon @click="showInfo" class="ml-auto position-absolute right mr-2" size="32">mdi-information-outline</vIcon>

        <div class="d-block">
          <div class="text-caption">
            <vIcon>mdi-gamepad-variant</vIcon>
            {{ game.name }}
          </div>

          <div class="text-caption">
            <vIcon>mdi-account-group</vIcon>
            {{ game.minMaxPlayers }}
          </div>

          <div class="text-caption">
            <vIcon>mdi-clock</vIcon>
            {{ game.time }}
          </div>
        </div>

        <vBtn :to="{name: 'CoupPage'}" class="mt-auto mb-2">Jogar</vBtn>

        <vBtn :href="game.shopUrl" target="_blank" variant="outlined">Comprar</vBtn>
      </div>
    </vImg>

    <vDialog v-model="show" :fullscreen="this.$vuetify.display.mobile">
      <GameInfo @close="show = false" :game="game"/>
    </vDialog>
  </vCard>
</template>

<script>
import GameInfo from '@/components/GameInfo.vue';

export default {
  components: { GameInfo },
  props: {
    game: {
      required: true,
      type: Object,
    },
  },
  data: () => ({
    show: false
  }),
  computed: {
    gameImageName() {
      const gameName = this.game.name.toLowerCase();
      const slugGameName = gameName.split(" ").join("-");

      return slugGameName;
    },
  },
  methods: {
    showInfo() {
      this.show = true
    }
  }
};
</script>

<style>
.v-img .v-responsive__content {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.v-img .v-responsive__content .game-footer {
  height: 40%;
  background-color: rgba(0, 0, 0, 0.75);
}
</style>
