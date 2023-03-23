<template>
  <div class="pa-4">
    <NavBar />

    <vCard class="pa-4" >
      <h2 class="text-center mb-10">Jogos disponíveis</h2>

      <vRow>
        <vCol
          cols="12"
          md="4"
          lg="3"
          :key="index"
          v-for="(game, index) in games"
        >
          <GameCard :game="game" info />
        </vCol>
      </vRow>
    </vCard>
  </div>
</template>

<script>
import NavBar from "@/layout/NavBar.vue";
import GameCard from "@/components/GameCard.vue";

export default {
  components: { NavBar, GameCard },
  data: () => ({
    games: [
      {
        releaseYear: "2012",
        name: "Coup",
        time: "15 min",
        minMaxPlayers: "2 a 10",
        shopUrl: "https://ludopedia.com.br/jogo/coup",
        playUrl: '',
        rules: `Em Coup, você quer ser o último jogador com influência no jogo. A influência é representada por cartas de personagens com a face para baixo em sua área de jogo.
                Cada jogador começa o jogo com duas moedas e dois de influência – ou seja, duas cartas de personagens viradas para baixo, o baralho de quinze consiste em três cópias de cinco personagens diferentes, cada um com um conjunto único de poderes: duque, assassino, condessa, capitão e embaixador.
                Na sua vez, você pode ter qualquer uma das ações listadas para cada personagem, independentemente de quais personagens você realmente tenha na sua frente.
                Nota: Jogando com mais do que 6 jogadores pode aumentar significativamente o tempo de jogo, e pode levar a longas esperas para aqueles que são eliminados cedo no jogo. Sendo mais recomendado para   jogadores experientes e situações excepcionais.`,
      },
    ],
  }),
};
</script>
