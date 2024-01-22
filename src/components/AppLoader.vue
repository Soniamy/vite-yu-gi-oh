<script>
export default {
  name: 'AppLoader',
};
</script>

<template>
  <div class="container d-flex justify-content-center">
    <div class="loader"></div>
  </div>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables.scss' as *;

.loader {
  content: ' ';
  display: block;
  width: 64px;
  height: 64px;
  margin: 8px;
  border-radius: 50%;
  border: 6px solid $primary;
  border-color: $primary transparent $primary transparent;
  animation: loader 1.2s linear infinite;
}
@keyframes loader {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
