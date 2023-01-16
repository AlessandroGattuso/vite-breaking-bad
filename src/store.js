import { reactive } from "vue";

export const store = reactive({
  cardsOfThatType: [],
  search: '',
  filtered: [],
  archetypes: [],
  typeActive: 'D/D'
})