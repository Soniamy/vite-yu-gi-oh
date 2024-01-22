<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';
import AppSearchType from './components/AppSearchType.vue';
import AppCard from './components/AppCard.vue';
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
          store.isLoading = false;
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

  <AppMain />

  <AppFooter />
</template>

<style lang="scss">
@use 'assets/scss/main' as *;
@import 'assets/scss/partials/reset';
</style>
