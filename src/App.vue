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
      this.getArchetypes()
      this.getCardsOfThatType()
    },
    data(){
      return{
        store,
        loaded: false
      }
    },
    methods:{
      async getCardsOfThatType(){
        await axios.get(`https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=${store.typeActive}`)
        .then((answer)=>{
          store.filtered = store.cardsOfThatType = (answer.data.data).slice()
        });
        setTimeout(()=>{
          this.loaded = true
        }, 1000)
      },
      async getArchetypes(){
        await axios.get('https://db.ygoprodeck.com/api/v7/archetypes.php')
        .then((answer)=>{
          store.archetypes =  answer.data.map(item => item.archetype_name);
        });
      }
    }
}
</script>

<template>
  <div v-if="loaded == false">
    <AppLoader></AppLoader>
  </div>
  <div v-else>
    <AppHeader @changeArchetype="getCardsOfThatType"></AppHeader>
    <AppBody></AppBody>
  </div>
</template>

<style lang="sass">
  @import './styles/generals.sass'
</style>
