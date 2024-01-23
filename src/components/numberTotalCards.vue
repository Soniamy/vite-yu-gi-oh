<script>
import { store } from '../store';
export default {
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <h5 class="text-light p-2">Found {{ store.cardsArray.length }} cards</h5>
</template>

<style lang="scss" scoped></style>
