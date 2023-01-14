<script>
import { store } from '../store.js' 

export default {
  name: 'AppHeader',
  data(){
    return{
      store
    }
  },
  methods:{
    searchNameCard(){
      store.filtered = store.cardsCollection
      if(store.search.split(" ").join("") != ''){
        store.filtered = store.cardsCollection.filter((e) => e.name.split(" ").join("").toLowerCase().match(store.search.split(" ").join("").toLowerCase()))
        //console.log("\n\n" +  this.filtered.forEach((e) => console.log(e.name)))
      }

      console.log("\n\n" +  store.filtered.length)
    }
  }
}
</script>
<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary p-1">
    <div class="container-fluid">
      <a class="navbar-brand me-5" href="#">
        <img src="../../public/images/logo.jpg" alt="logo">
      </a>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <select class="form-select text-body-secondary" id="inputGroupSelect01">
              <option value="Alien" selected>
                  Alien({{ store.cardsCollection.length }})
              </option>
              <option value="Other">
                  Other
              </option>
            </select>
          </li>
        </ul>
        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" v-model="store.search" @keyup="searchNameCard">
        </form>
      </div>
    </div>
  </nav>
</template>
<style lang="sass" scoped>
  @use '../styles/partials/variables' as *
  nav.navbar
    background-color: $primary !important
    img
      width: 180px
      height: 100px
</style>