<template>
  <div class="home">
    <div class="col-12 text-center mt-5">
      <h1 class="text-white pt-4 ">Recommended</h1>
    </div>
   
  
    <div class="container text-center">
      
    </div>
  </div>
 <div class="row">

 
 
  <div class="card text-center col-4" v-for="card in cards" v-bind:key="card">
  <div class="card-header bg-sh " >
 
  
  <div class="card-body p-0 bg-sh" >
     <a :href="card.watch">
   <img class="card-img-top w-75" :src="card.link" alt="something"/>
    </a>
  </div>
  <div class="card-footer text-muted bg-sh">
    
  </div>
</div>
</div>






 </div>

</template>

<script>
 import box from '@/components/box.vue'
import store from "@/store.js"
import {getDocs, collection, db } from "@/firebase";

let cards
  cards= [

  ];
  let cards2
  cards2=[
    {"url": "https://firebasestorage.googleapis.com/v0/b/streamsitecity.appspot.com/o/endgame.jpg?alt=media&token=a0669aeb-bde5-43e6-bac4-d61d74879b9a", "description": "Avengers Endgame", "watch": "https://bflix.gg/watch-movie/watch-avengers-endgame-19722.5376856"},
    {"url":"https://firebasestorage.googleapis.com/v0/b/streamsitecity.appspot.com/o/224a775f80315460af88e759c753bb03.jpg?alt=media&token=b0a7a7b7-f0be-43c2-8e09-e1838e86976e", "description": "One Piece", "watch": "https://gogoanime.nl/watch/one-piece.ov8/ep-1"},
    {"url": "https://firebasestorage.googleapis.com/v0/b/streamsitecity.appspot.com/o/MV5BYTRiNDQwYzAtMzVlZS00NTI5LWJjYjUtMzkwNTUzMWMxZTllXkEyXkFqcGdeQXVyNDIzMzcwNjc%40._V1_.jpg?alt=media&token=cbd53001-389b-4cd6-b05d-aa481c615884", "description": "Game of Thrones", "watch": "https://bflix.gg/watch-tv/watch-game-of-thrones-39539.4846588"}
];
let cards3
  cards3=[
    {"url": "https://firebasestorage.googleapis.com/v0/b/streamsitecity.appspot.com/o/MV5BZDBkZjRiNGMtZGU2My00ODdkLWI0MGYtNGU4MmJjN2MzOTkxXkEyXkFqcGdeQXVyMDM2NDM2MQ%40%40._V1_.jpg?alt=media&token=d2d7c5ec-7427-40ad-8f7c-a37411210442", "description" : "House of Dragon", "watch": <router-link to="/houseofdragon">"x"</router-link>},
    {"url": "https://firebasestorage.googleapis.com/v0/b/streamsitecity.appspot.com/o/Tokyo_Ghoul_volume_1_cover.jpg?alt=media&token=17a1ce3d-c94f-499e-aa69-87a14ad35542", "description": "Tokyo Ghoul", "watch": "https://gogoanime.nl/watch/tokyo-ghoul.7w06/ep-1"},
    {"url": "https://firebasestorage.googleapis.com/v0/b/streamsitecity.appspot.com/o/MV5BMTkwOTY0MTc1NV5BMl5BanBnXkFtZTcwMDQwNjA2NQ%40%40._V1_FMjpg_UX1000_.jpg?alt=media&token=69a545fc-8b95-4e2c-b4da-53ec755764c8", "description" : "Transformers Dark of The Moon", "watch": "https://bflix.gg/movie/watch-transformers-dark-of-the-moon-7754"}
];
// @ is an alias to /src


export default {
  name: 'HomeView',
  data: function(){
    return {
        cards: cards,
        cards2: cards2,
        cards3: cards3, 
        store,
        linkMov: [],
     
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
methods:{
  puni(){
      getDocs(collection(db, "filmovi")).then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          
          this.cards.push(doc.data());
        });
      });
      console.log(this.cards);
    }, 
},
created: function () {
  this.puni();
},
 
  components: {
    box,
  },

}

</script>
