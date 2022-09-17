<template>
  <div class="horror">
    <div class="col-12 text-center mt-5">
      <h1 class="text-white pt-4 ">Trending</h1>
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
  {"url": "https://firebasestorage.googleapis.com/v0/b/streamsitecity.appspot.com/o/MV5BZDBkZjRiNGMtZGU2My00ODdkLWI0MGYtNGU4MmJjN2MzOTkxXkEyXkFqcGdeQXVyMDM2NDM2MQ%40%40._V1_.jpg?alt=media&token=d2d7c5ec-7427-40ad-8f7c-a37411210442", "description": "House of Dragon" },
  {"url":"https://firebasestorage.googleapis.com/v0/b/streamsitecity.appspot.com/o/MV5BMmVlODAyNTAtODc3Yi00MjFhLTk5MTktNWIwOTUzY2M2ZDc5XkEyXkFqcGdeQXVyMDM2NDM2MQ%40%40._V1_.jpg?alt=media&token=3d37dfad-7f7a-419b-953d-411a5d8d647e", "description": " The Lord of the Rings: The Rings of Power"},
  {"url":"https://firebasestorage.googleapis.com/v0/b/streamsitecity.appspot.com/o/MV5BZjgwOGI3ZWEtNjBiMy00ZjM3LWFkNWYtNmU1MzY1ZGZkMDU2XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg?alt=media&token=425db552-dd72-4b5a-b811-1338a8ee03e7", "description": "Vikings Valhalla"}
  ];
  let cards2
  cards2=[
    {"url": "https://firebasestorage.googleapis.com/v0/b/streamsitecity.appspot.com/o/224a775f80315460af88e759c753bb03.jpg?alt=media&token=b0a7a7b7-f0be-43c2-8e09-e1838e86976e", "description": "One Piece"},
    {"url":"https://firebasestorage.googleapis.com/v0/b/streamsitecity.appspot.com/o/MV5BYWU4ZmI0NTItZjcyNy00MzQ5LThiNDQtZDZkNjg1NWUwN2RhXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg?alt=media&token=6a16be42-30d5-44a2-a9ca-cea204c5740f", "description": "Cobra Kai"},
    {"url": "https://firebasestorage.googleapis.com/v0/b/streamsitecity.appspot.com/o/MV5BNDA4MzE3NGItNTk0Yi00OTYyLWFmOWQtYjc2NjlhOTAzN2RlXkEyXkFqcGdeQXVyMTgxNDgxOQ%40%40._V1_FMjpg_UX1000_.jpg?alt=media&token=59d7b2b4-d48d-4678-8999-a10340c69262", "description": "The Patient"}
];
let cards3
  cards3=[
    {"url": "https://firebasestorage.googleapis.com/v0/b/streamsitecity.appspot.com/o/the-sandman-netflix-poster.jpg?alt=media&token=779bd662-2ce0-47e4-99f3-b463c6cb4379", "description" : "The Sandman"},
    {"url": "https://firebasestorage.googleapis.com/v0/b/streamsitecity.appspot.com/o/MV5BZjI3NjcyN2UtMGNhZC00YTYxLWJmOTQtNWI1ZGJmNjA4ZjY5XkEyXkFqcGdeQXVyNjEwNTM2Mzc%40._V1_FMjpg_UX1000_.jpg?alt=media&token=10b372fd-4a26-4451-bd36-fdddaa5988e1", "description": "Black Bird"},
    {"url": "https://firebasestorage.googleapis.com/v0/b/streamsitecity.appspot.com/o/rick-morty-portal-i40514.jpg?alt=media&token=2a01eb11-51c0-417d-89a6-b9236c9ef961", "description" : "Rick and MOrty: Season 6"}
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
