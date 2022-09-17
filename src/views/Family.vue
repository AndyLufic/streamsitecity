<template>
  <div class="horror">
    <div class="col-12 text-center mt-5">
      <h1 class="text-white pt-4 ">Family</h1>
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
  {"url": "https://firebasestorage.googleapis.com/v0/b/streamsitecity.appspot.com/o/1498165028-15-grown-ups-ver2-xlg.jpg?alt=media&token=61a201d5-bbc7-46e8-b2a8-6ef669cee6cf", "description": "Grown ups" },
  {"url":"https://firebasestorage.googleapis.com/v0/b/streamsitecity.appspot.com/o/20.9.2012%2014_30_01_Hotel%20TransylvaniaMANJE.jpg?alt=media&token=98e945db-4ce8-4126-834c-3fc3e5110dec", "description": "Hotel Transylvania"},
  {"url":"https://firebasestorage.googleapis.com/v0/b/streamsitecity.appspot.com/o/hotel-transylvania-2_dvd_menart_hr.jpg?alt=media&token=15b79e34-2df6-4cd1-922c-cb5b3fe99382", "description": "Hotel Transylvania 2"}
  ];
  let cards2
  cards2=[
    {"url": "https://firebasestorage.googleapis.com/v0/b/streamsitecity.appspot.com/o/MV5BMTM3MzM3NDE5MV5BMl5BanBnXkFtZTcwNDE5MTUxNA%40%40._V1_.jpg?alt=media&token=0b07a36a-6529-47a0-b8f0-9ed8927a0106", "description": "Just go With It"},
    {"url":"https://firebasestorage.googleapis.com/v0/b/streamsitecity.appspot.com/o/Anger_management_poster.jpg?alt=media&token=632d295e-8923-4fe6-b5fb-40e1693027d6", "description": "Anger Management"},
    {"url": "https://firebasestorage.googleapis.com/v0/b/streamsitecity.appspot.com/o/229928_ZOOKEEPER_1400x2100_English_0.jpg?alt=media&token=98d2c488-6299-4293-80c1-7bdded7d618d ", "description": "Zookeeper"}
];
let cards3
  cards3=[
    {"url": "https://firebasestorage.googleapis.com/v0/b/streamsitecity.appspot.com/o/MV5BNTMzNjE4NjE2MV5BMl5BanBnXkFtZTgwOTc1NjE4NTM%40._V1_.jpg?alt=media&token=f293082d-90ae-413b-97bc-74c9b0c2b843", "description" : "Father of the year"},
    {"url": "https://firebasestorage.googleapis.com/v0/b/streamsitecity.appspot.com/o/MV5BMmI1YTNlNjUtMjk4NS00YWZiLWI5NjktZjY5ZjRhZDJmMzQ2XkEyXkFqcGdeQXVyNjgxNTAwNjQ%40._V1_.jpg?alt=media&token=fd6d7d34-cf29-4521-92cd-d6027fdc3878", "description": "The ridicolous 6"},
    {"url": "https://firebasestorage.googleapis.com/v0/b/streamsitecity.appspot.com/o/Hustle_(2022_film).jpg?alt=media&token=0e14213a-b9ab-43f6-bedd-e43bf167a2f4", "description" : "Hustle"}
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
