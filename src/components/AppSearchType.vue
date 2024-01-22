<script>
import { store } from './store';
export default {
  name: 'AppSearchType',
  data() {
    return {
      store,
    };
  },
  methods: {},
};
</script>

<template>
  <div class="container d-flex align-items-center">
    <div class="form my-3 mx-2">
      <select class="form-select p-20 width-form">
        <option selected>Alien</option>
      </select>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.width-form {
  width: 215px;
}
</style>
