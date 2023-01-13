<script>
export default {
  name: 'AppCard',
  props:{
    card: Object
  }
}
</script>
<template>
  <div class="card">
    <img :src="card.card_images[0].image_url" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">{{ card.name }}</h5>
    </div>
    <div class="card-body rounded-bottom">
      <p class="card-text">{{ card.archetype }}</p>
    </div>
  </div>
</template>
<style lang="sass" scoped>

    @use '../styles/partials/_variables' as *
    .card
        width: calc(100%/5 - 30px)
        img
          width: 100%
    .card-body
        color: white
        background-color: $primary
</style>