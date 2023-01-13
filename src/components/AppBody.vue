<script>
import AppCard from './AppCard.vue'
import { store } from '../store.js'

export default {
  name: 'AppBody',
  components:{
    AppCard
  },
  data(){
    return{
      store
    }
  }
}
</script>
<template>
  <div class="d-flex flex-wrap container card-container my-5">
    <AppCard v-for="(card, index) in store.filtered" :card="card" :key="index"></AppCard>
  </div>
</template>
<style lang="sass" scoped>
  .card-container
    gap: 20px
</style>