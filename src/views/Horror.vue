<template>
    <div class="horror">
      <div class="col-12 text-center mt-5">
        <h1 class="text-white pt-4 ">Horror</h1>
      </div>
      <div class="container text-center">
        
      </div>
    </div>
   
   <div class="row">
  
   <div class="col-4">
    <box v-for="card in filterCards3" :key="card.url" :info="card"/>
  </div>
   
   <div class="col-4">
    <box v-for="card in filterCards" :key="card.url" :info="card"/>
   </div>
  
   <div class="col-4">
    <box v-for="card in filterCards2" :key="card.url" :info="card"/>
   </div>
  
   </div>
  
  </template>
  
  <script>
   import box from '@/components/box.vue'
   import store from "@/store.js"

  let cards
    cards= [
    {"url": "https://firebasestorage.googleapis.com/v0/b/streamsitecity.appspot.com/o/preuzimanje.jpg?alt=media&token=f9976120-028c-4885-b15a-bfa39b2503b0", "description": "The Conjuring", "watch": "https://bflix.gg/watch-movie/watch-the-conjuring-19532.5297707" },
    {"url":"https://firebasestorage.googleapis.com/v0/b/streamsitecity.appspot.com/o/61pzIOPuCxL._SL1200_.jpg?alt=media&token=4d48f179-62b5-40f0-b5b2-26446731bbe2", "description": "Anabelle 2 "},
    {"url":"https://firebasestorage.googleapis.com/v0/b/streamsitecity.appspot.com/o/img239091-tv2986258.jpg?alt=media&token=8eab449d-a7af-4869-a375-8fbe9dfa5abd", "description": "Anabelle"}
    ];
    let cards2
    cards2=[
      {"url": "https://firebasestorage.googleapis.com/v0/b/streamsitecity.appspot.com/o/Conjuring_2.jpg?alt=media&token=15f80123-623c-49bc-a69b-128455887adf", "description": "Conjuring 2 "},
      {"url":"https://firebasestorage.googleapis.com/v0/b/streamsitecity.appspot.com/o/MV5BMjM3NzQ5NDcxOF5BMl5BanBnXkFtZTgwNzM4MTQ5NTM%40._V1_FMjpg_UX1000_.jpg?alt=media&token=933c2d87-4d08-4331-887c-934137c68979", "description": "The Nun"},
      {"url": " https://firebasestorage.googleapis.com/v0/b/streamsitecity.appspot.com/o/MV5BNjZlOGVhZDctODU2Yi00NzcyLWFlNmItZGQ2ZDc2NTIwNGMyXkEyXkFqcGdeQXVyNzkwMTYyMTI%40._V1_.jpg?alt=media&token=45f110e5-ae4b-44bf-8c54-3438645fdf20", "description": "The Nun 2"}
  ];
  let cards3
    cards3=[
      {"url": "https://firebasestorage.googleapis.com/v0/b/streamsitecity.appspot.com/o/b58263b60ceaaac5b96b7246e11ceeb4.jpg?alt=media&token=19f4d025-0a79-48cf-bab7-0ec1c69f046e", "description" : "Chucky"},
      {"url": "https://firebasestorage.googleapis.com/v0/b/streamsitecity.appspot.com/o/Jigsaw-cover.jpg?alt=media&token=2e822ac0-0400-4baf-8566-b3495825cdf3", "description": "Jigsaw"},
      {"url": " https://firebasestorage.googleapis.com/v0/b/streamsitecity.appspot.com/o/Leatherface_final_one-sheet_poster.jpg?alt=media&token=f767f4ad-2d8f-46ab-834a-ebbe8cf448fa", "description" : "Leatherface"}
  ];
  // @ is an alias to /src
  
  
  export default {
    name: 'horror',
    data: function(){
      return {
          cards: cards,
          cards2: cards2,
          cards3: cards3, 
          store: store,
      };
  
  
    },
    
    computed: {
    filterCards(){
      let termin= this.store.searchTerm;
      let newCards =[]

   
      for (let card of this.cards ){
        if (card.description.indexOf(termin) >=0){
         newCards.push(card)
        }
      }
      return newCards;
    }, 
    filterCards2(){
      let termin= this.store.searchTerm;
   
      let newCards2 =[]
     
      
      for (let card of this.cards2 ){
        if (card.description.indexOf(termin) >=0){
         newCards2.push(card)
        }
      }
      return newCards2;
    
    }, 
    filterCards3(){
      let termin= this.store.searchTerm;
   
      let newCards3 =[]
     
      
      for (let card of this.cards3 ){
        if (card.description.indexOf(termin) >=0){
         newCards3.push(card)
        }
      }
      return newCards3;
    
    },
    
  },

    components: {
      box,
    },
  }
  </script>
  