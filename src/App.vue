<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';
import AppSearchType from './components/AppSearchType.vue';
import AppCard from './components/AppCard.vue';
//BONUS//
import AppLoader from './components/AppLoader.vue';
import axios from 'axios';
import { store } from './store';

export default {
  data() {
    return {
      store,
    };
  },
  components: {
    AppHeader,
    AppMain,
    AppFooter,
    AppSearchType,
    AppCard,
    AppLoader,
  },
  methods: {
    getApi() {
      store.isLoading = true;
      axios
        .get(store.apiURL, {
          params: {
            num: store.cardNum,
            offset: store.cardOffset,
            type: store.optionType,
          },
        })
        .then((result) => {
          store.cardsArray = result.data.data;
          //BONUS//
          setTimeout(() => {
            store.isLoading = false;
          }, 2000);
        });
    },
    getAllCardsTypes() {
      axios.get(store.apiURL).then((result) => {
        const cards = result.data.data;
        cards.forEach((card) => {
          if (!store.cardsType.includes(card.type)) {
            store.cardsType.push(card.type);
          }
        });
        console.log(store.cardsType);
      });
    },
  },
  mounted() {
    this.getApi();
    this.getAllCardsTypes();
  },
};
</script>

<template>
  <AppHeader />

  <AppLoader v-if="store.isLoading" />
  <div class="container-after-loading" v-else>
    <AppMain @startSearchType="getApi" @reset="getApi" />
  </div>

  <AppFooter />
</template>

<style lang="scss">
@use 'assets/scss/main' as *;
@import 'assets/scss/partials/reset';
</style>
