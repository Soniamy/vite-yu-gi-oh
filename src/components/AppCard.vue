<script>
export default {
  name: 'AppCard',
  props: {
    imgURL: String,
    cardName: String,
    archetype: {
      type: String,
      default: 'Not Found',
    },
  },
};
</script>

<template>
  <div class="yugi-card mb-3 d-flex flex-column justify-content-between">
    <div class="card-image">
      <img :src="imgURL" :alt="cardName" />
    </div>
    <div class="card-name mt-1 text-light">
      <p class="text-center fw-bold">{{ cardName }}</p>
    </div>
    <div class="card-archetype">
      <p class="text-center fst-italic">{{ archetype }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables.scss' as *;
.yugi-card {
  background-color: $primary;
  width: calc(100% / 5 - 10px);
  border-radius: 5px;
  margin: 0 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);

  .card-image {
    img {
      width: 100%;
    }
  }

  .card-name {
    font-size: 1.1rem;
  }
}
</style>
