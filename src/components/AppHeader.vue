<script>
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>

<template>
  <header>
    <div class="d-flex align-items-center">
      <img class="me-3" src="../../public/logo.png" alt="logo" />
      <h1>Yu-Gi-Oh Api</h1>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables.scss';

header {
  height: 80px;
  background-color: white;
  padding: 5px;

  img {
    height: 50px;
  }
}
</style>
