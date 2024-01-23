<script>
//importazione di AXIOS per il filtraggio//
import axios from 'axios';
import { store } from '../store';
export default {
  name: 'AppSearchType',
  data() {
    return {
      store,
    };
  },
  //creazione di axios
  created() {
    axios.get(store.apiArchetypeUrl).then((response) => {
      store.yuArchetype = response.data;
    });
  },
};
</script>

<template>
  <div class="container d-flex align-items-center">
    <div class="form my-3 mx-2">
      <!--
        SISTEMAZIONE DEL FORM CON L'AGGIUNTA DEL V-MODEL
      -->
      <select
        class="form-select p-20 width-form"
        name="search"
        id="search"
        v-model="store.keyArchetype"
        @change="$emit('ricerca')"
      >
        <!--
        UTILIZZO DI EMIT PER CATTURARE L'EVENTO CLICK
      -->
        <option selected value="">Select Archetype</option>
        <!--
        UTILIZZO DI V-FOR PER CICLARE L'ARRAY ARCHETYPE
      -->
        <option
          v-for="(archetype, index) in store.yuArchetype"
          :key="index"
          :value="archetype.archetype_name"
        >
          {{ archetype.archetype_name }}
        </option>
      </select>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.width-form {
  width: 215px;
}
</style>
