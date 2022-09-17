<template>
  <div class="horror">
    <div class="col-12 text-center mt-5">
      <h1 class="text-white pt-4 ">Anime</h1>
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
  {"url": "https://firebasestorage.googleapis.com/v0/b/streamsitecity.appspot.com/o/Tokyo_Ghoul_volume_1_cover.jpg?alt=media&token=17a1ce3d-c94f-499e-aa69-87a14ad35542", "description": "Tokyo Ghoul" },
  {"url":"https://firebasestorage.googleapis.com/v0/b/streamsitecity.appspot.com/o/224a775f80315460af88e759c753bb03.jpg?alt=media&token=b0a7a7b7-f0be-43c2-8e09-e1838e86976e", "description": "One Piece"},
  {"url":"https://firebasestorage.googleapis.com/v0/b/streamsitecity.appspot.com/o/NarutoCoverTankobon1.jpg?alt=media&token=32558e5b-3388-4a75-a4ab-41b8dd4b218e", "description": "Naruto"}
  ];
  let cards2
  cards2=[
    {"url": "https://firebasestorage.googleapis.com/v0/b/streamsitecity.appspot.com/o/MV5BNjRiNmNjMmMtN2U2Yi00ODgxLTk3OTMtMmI1MTI1NjYyZTEzXkEyXkFqcGdeQXVyNjAwNDUxODI%40._V1_.jpg?alt=media&token=e709f8ef-6496-4096-bd60-04c259956a43", "description": "Death Note"},
    {"url":"https://firebasestorage.googleapis.com/v0/b/streamsitecity.appspot.com/o/ab001b1cb053ec0d7b1b47b0f7bf98e71647329181_main.jpg?alt=media&token=e1213b30-16bd-4d18-9b0d-12665f8bd83f", "description": "Dragon ball Z"},
    {"url": " https://firebasestorage.googleapis.com/v0/b/streamsitecity.appspot.com/o/Fullmetal_Alchemist_Brotherhood_TV_Series-748146576-large.jpg?alt=media&token=7794af29-633d-4e8f-b674-2dc6a4d7d07a", "description": "Fullmetal Alchemist Brotherhood"}
];
let cards3
  cards3=[
    {"url": "https://firebasestorage.googleapis.com/v0/b/streamsitecity.appspot.com/o/ade22940400ce19ea589cf5bb2d1fb751645644825_main.jpg?alt=media&token=db5d5ecb-e856-4d4f-8dca-438f4c2bbd27", "description" : "Gleipnir"},
    {"url": "https://firebasestorage.googleapis.com/v0/b/streamsitecity.appspot.com/o/unnamed.png?alt=media&token=8eefb640-b608-45ed-a3f2-28653bc29ea1", "description": "I want to eat your pancreas"},
    {"url": " https://firebasestorage.googleapis.com/v0/b/streamsitecity.appspot.com/o/96435.jpg?alt=media&token=79536d8a-e65b-43c0-b51c-e61c7fdf4a59", "description" : "A silent voice"}
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
