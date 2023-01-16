<script>
import { store } from '../store.js' 
import axios from 'axios'

export default {
  name: 'AppHeader',
  data(){
    return{
      store,
      typesLength: []
    }
  },  
  methods:{
    searchNameCard(){
      store.filtered = store.cardsOfThatType
      if(store.search.split(" ").join("") != ''){
        store.filtered = store.cardsOfThatType.filter((e) => e.name.split(" ").join("").toLowerCase().match(store.search.split(" ").join("").toLowerCase()))
      }
    },
    changeType(){
      store.typeActive = document.querySelector('select').value;
      this.$emit('changeArchetype')
    },
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
            <select v-on:change="changeType" class="form-select text-body-secondary" id="inputGroupSelect01">
              <option :value="type.name" v-for="(type, index) in store.archetypes" :key="index">
                  {{ type.name }} 
                  ({{ type.size }})
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