<template>
  <div class="horror">
    <div class="col-12 text-center mt-5">
      <h1 class="text-white pt-4 ">New</h1>
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
  {"url":"https://firebasestorage.googleapis.com/v0/b/streamsitecity.appspot.com/o/the-sandman-netflix-poster.jpg?alt=media&token=779bd662-2ce0-47e4-99f3-b463c6cb4379", "description": "The Sandman"},
  {"url":"https://firebasestorage.googleapis.com/v0/b/streamsitecity.appspot.com/o/Archive_81_poster.jpg?alt=media&token=bacdad79-ca1d-42fe-8144-a88cf85a46c0", "description": "Archive 81"}
  ];
  let cards2
  cards2=[
    {"url": "https://firebasestorage.googleapis.com/v0/b/streamsitecity.appspot.com/o/MV5BMmVlODAyNTAtODc3Yi00MjFhLTk5MTktNWIwOTUzY2M2ZDc5XkEyXkFqcGdeQXVyMDM2NDM2MQ%40%40._V1_.jpg?alt=media&token=3d37dfad-7f7a-419b-953d-411a5d8d647e", "description": "The Lord of the Rings: The Rings of Power"},
    {"url":"https://firebasestorage.googleapis.com/v0/b/streamsitecity.appspot.com/o/MV5BZjgwOGI3ZWEtNjBiMy00ZjM3LWFkNWYtNmU1MzY1ZGZkMDU2XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg?alt=media&token=425db552-dd72-4b5a-b811-1338a8ee03e7", "description": "Vikings Valhalla"},
    {"url": "https://firebasestorage.googleapis.com/v0/b/streamsitecity.appspot.com/o/MV5BYWMzM2QyYzctYWU4NS00NmVjLWFhNGQtYzcwMGU1MGQ5MmI1XkEyXkFqcGdeQXVyMTQyMTMwOTk0._V1_.jpg?alt=media&token=f3f802f3-df2d-4b87-a912-b5f4bdbf6018 ", "description": "Echoes"}
];
let cards3
  cards3=[
    {"url": "https://firebasestorage.googleapis.com/v0/b/streamsitecity.appspot.com/o/The_Terminal_List.jpeg?alt=media&token=af211a2d-f265-446f-911b-e9af951333a1", "description" : "The Terminal List"},
    {"url": "https://firebasestorage.googleapis.com/v0/b/streamsitecity.appspot.com/o/MV5BZDg1OWRiMTktZDdiNy00NTZlLTg2Y2EtNWRiMTcxMGE5YTUxXkEyXkFqcGdeQXVyMTM2MDY0OTYx._V1_FMjpg_UX1000_.jpg?alt=media&token=91f636c4-dde9-4c1c-8b80-cdbb514a0827", "description": "Westworld"},
    {"url": " https://firebasestorage.googleapis.com/v0/b/streamsitecity.appspot.com/o/MV5BYzZkMmRjODAtY2NmMS00YjI1LTlkZWMtY2UxNjE5ZWM2M2I3XkEyXkFqcGdeQXVyMDM2NDM2MQ%40%40._V1_.jpg?alt=media&token=344f3d65-cf44-41c9-8ffa-2ebd5db63196", "description" : "Night Sky"}
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
