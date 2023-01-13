<script>
  import AppHeader from './components/AppHeader.vue';
  import AppBody from './components/AppBody.vue';
  import axios from 'axios'
  import { store } from './store.js'

  export default {
    components:{
      AppHeader,
      AppBody
    },
    created(){
      this.getCardCollection()
    },
    data(){
      return{
        store
      }
    },
    methods:{
      async getCardCollection(){
        await axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=Alien')
        .then((answer)=>{
          this.store.cardsCollection = (answer.data.data).slice()
        });
        console.log(store.cardsCollection[0])
      }
    }
}
</script>

<template>
  <AppHeader></AppHeader>
  <AppBody></AppBody>
</template>

<style lang="sass">
  @import './styles/generals.sass'
</style>
