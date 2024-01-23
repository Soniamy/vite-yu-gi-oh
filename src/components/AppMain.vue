<script>
import AppSearchType from './AppSearchType.vue';
import AppCard from './AppCard.vue';
//importazione di axios
import axios from 'axios';
import { store } from '../store';
export default {
  components: {
    AppSearchType,
    AppCard,
  },
  data() {
    return {
      store,
    };
  },
  methods: {
    //filtro di ricerca per archetipo
    ricerca() {
      if (this.store.keyArchetype !== '') {
        axios
          .get(store.apiURL, { params: { archetype: this.store.keyArchetype } })
          .then((response) => {
            store.cardsArray = response.data.data;
          });
      }
    },
  },
  created() {
    this.ricerca();
  },
};
</script>

<template>
  <main>
    <!--assegnazione dell'evento ricerca-->
    <AppSearchType @ricerca="ricerca" />
    <div class="container p-5">
      <div class="top-bar d-flex align-items-center">
        <h5 class="text-light p-2">
          Found {{ store.cardsArray.length }} cards
        </h5>
      </div>
      <div class="cards-container d-flex flex-wrap">
        <AppCard
          v-for="card in store.cardsArray"
          :key="card.id"
          :imgURL="card.card_images[0].image_url"
          :cardName="card.name"
          :archetype="card.archetype"
        />
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables.scss' as *;
main {
  background-color: $primary;

  .container:not(:first-child) {
    background-color: white;
    box-shadow: 0 0 15px rgba($color: #000000, $alpha: 0.5);
    border-radius: 5px;
    .top-bar {
      height: 70px;
      background-color: black;
      border-radius: 5px 5px 0 0;
      margin: 0 5px;
    }
  }
}
</style>
