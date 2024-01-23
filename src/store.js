import { reactive } from 'vue';

export const store = reactive({
  apiURL: ' https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0',
  cardsArray: [],
  archetype: [],
  cardOffset: 0,
  isLoading: true,
  optionType: null,
  //AGGIUNTA AXIOS PER FILTRAGGIO DI ARCHETIPO
  yuArchetype: [],
  apiArchetypeUrl: 'https://db.ygoprodeck.com/api/v7/archetypes.php',
  keyArchetype: '',
});
