<script>
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>

<template>
  <main>
    <div class="container p-4">
      <div class="top-bar d-flex align-items-center"></div>
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
  }
}
</style>
