<script>
  import AppHeader from './components/AppHeader.vue';
  import AppBody from './components/AppBody.vue';
  import AppLoader from './components/AppLoader.vue';
  import axios from 'axios'
  import { store } from './store.js'

  export default {
    components:{
      AppHeader,
      AppBody,
      AppLoader
    },
    created(){
      this.getCardCollection()
    },
    data(){
      return{
        store,
        loaded: false
      }
    },
    methods:{
      async getCardCollection(){
        await axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=Alien')
        .then((answer)=>{
          store.filtered = store.cardsCollection = (answer.data.data).slice()
        });
        console.log(store.cardsCollection.length)
        setTimeout(()=>{
          this.loaded = true
        }, 1000)
      }
    }
}
</script>

<template>
  <div v-if="loaded == false">
    <AppLoader></AppLoader>
  </div>
  <div v-else>
    <AppHeader></AppHeader>
    <AppBody></AppBody>
  </div>
</template>

<style lang="sass">
  @import './styles/generals.sass'
</style>
