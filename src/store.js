import { reactive } from 'vue';

export const store = reactive({
  apiURL: ' https://db.ygoprodeck.com/api/v7/cardinfo.php',
  cardsArray: [],
  cardType: [],
  cardNum: 30,
  cardOffset: 0,
  isLoading: true,
  optionType: null,
  //AGGIUNTA AXIOS PER FILTRAGGIO DI ARCHETIPO//
  yuArchetype: [],
  apiArchetypeUrl: 'https://db.ygoprodeck.com/api/v7/archetypes.php',
  keyArchetype: '',
});
