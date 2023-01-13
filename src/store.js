import { reactive } from "vue";

export const store = reactive({
  cardsCollection: [],
  search: '',
  filtered: []
})