<script>
export default {
  name: 'AppCard',
  props:{
    card: Object
  },
  created(){
    this.getCardImage()
  },
  methods:{
    getCardImage(){
      let tester = new Image();
      console.log('wow1234')
      tester.addEventListener('error', this.imageNotFound);
      tester.src = this.card.card_images[0].image_url;
    },
    imageNotFound(){
      console.log('entro')
      this.card.card_images[0].image_url = 'https://upload.wikimedia.org/wikipedia/en/2/2b/Yugioh_Card_Back.jpg'
    }
  }
}
</script>
<template>
  <div class="card">
    <div class="card-body d-flex justify-content-center">
      <img :src="card.card_images[0].image_url" class="card-img-top">
    </div>
    <div class="card-body">
      <h5 class="card-title">{{ card.name }}</h5>
    </div>
    <div class="card-body pt-1">
      <p class="card-text">{{ card.archetype }}</p>
    </div>
  </div>
</template>
<style lang="sass" scoped>

    @use '../styles/partials/_variables' as *
    .card
        width: calc(100%/5 - 30px)
        background-color: $primary
        border: none
        img
          width: 80%
    .card-body
        text-align: center
        color: white
        
</style>