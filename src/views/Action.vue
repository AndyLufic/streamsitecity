<template>
  <div class="horror">
    <div class="col-12 text-center mt-5">
      <h1 class="text-white pt-4 ">Action</h1>
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
  {"url": "https://firebasestorage.googleapis.com/v0/b/streamsitecity.appspot.com/o/MV5BOWY4MmFiY2QtMzE1YS00NTg1LWIwOTQtYTI4ZGUzNWIxNTVmXkEyXkFqcGdeQXVyODk4OTc3MTY%40._V1_FMjpg_UX1000_.jpg?alt=media&token=4e657992-65b8-498d-8414-1872b70c0913", "description": "The Gray Man" },
  {"url":"https://firebasestorage.googleapis.com/v0/b/streamsitecity.appspot.com/o/MV5BNWEyOThlZTAtMzExMy00NDBhLTk4Y2QtMDg3OTRkNzgyNjEyXkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_.jpg?alt=media&token=23dc1605-7334-4528-ae95-19fe81b1ea87", "description": "Carter"},
  {"url":"https://firebasestorage.googleapis.com/v0/b/streamsitecity.appspot.com/o/Morbius_(film)_poster.jpg?alt=media&token=57e00f5d-3890-4297-8b8e-1974c7dd1f59", "description": "Morbius"}
  ];
  let cards2
  cards2=[
    {"url": "https://firebasestorage.googleapis.com/v0/b/streamsitecity.appspot.com/o/Interceptor_(film).jpg?alt=media&token=1b5bcac4-a99d-4d00-be78-98a82b1c1ac3", "description": "Interceptor"},
    {"url":"https://firebasestorage.googleapis.com/v0/b/streamsitecity.appspot.com/o/img533304-7991608.jpg?alt=media&token=c34b7fc5-769a-4f01-bc9b-1b767961cf8f", "description": "Red Notice"},
    {"url": "https://firebasestorage.googleapis.com/v0/b/streamsitecity.appspot.com/o/MV5BOWM0YWMwMDQtMjE5NS00ZTIwLWE1NWEtODViMWZjMWI2OTU3XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg?alt=media&token=1eebe740-dacb-4343-a68c-e9f5727ed042", "description": "The Adam Project"}
];
let cards3
  cards3=[
    {"url": "https://firebasestorage.googleapis.com/v0/b/streamsitecity.appspot.com/o/Welcome_to_Raccoon_City.jpg?alt=media&token=ad22d0d3-dc67-46ce-80f5-4b2e6686a377", "description" : "Resident Evil: Welcome to Raccoon City"},
    {"url": "https://firebasestorage.googleapis.com/v0/b/streamsitecity.appspot.com/o/Tomb_Raider_(2018_film).png?alt=media&token=b70d8ed3-bafe-4c0c-9f3b-e9eb87a808c8", "description": "Tomb Raider"},
    {"url": "https://firebasestorage.googleapis.com/v0/b/streamsitecity.appspot.com/o/MV5BMzU3YTc1ZjMtZTAyOC00ZTI1LWE0MzItMTllN2M2YWI4MWZmXkEyXkFqcGdeQXVyMDA4NzMyOA%40%40._V1_.jpg?alt=media&token=c6cb07c9-3d4e-4b4d-b1dc-dc6ca015ac7e", "description" : "Venom 2 (Venom: Let There Be Carnage)"}
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
