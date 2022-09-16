<template>
  <div class="home">
    <div class="col-12 text-center mt-5">
      <h1 class="text-white pt-4 ">Recommended</h1>
    </div>
    <div class="container text-center">
      
    </div>
  </div>
 
 <div class="row">

 <div class="col-4">
  <box v-for="card in cards3" :key="card" :info="card"/>
</div>
 
 <div class="col-4">
  <box v-for="card in cards" :key="card" :info="card"/>
 </div>

 <div class="col-4">
  <box v-for="card in cards2" :key="card" :info="card"/>
 </div>

 </div>

</template>

<script>
 import box from '@/components/box.vue'
let cards
  cards= [
 "https://firebasestorage.googleapis.com/v0/b/streamsitecity.appspot.com/o/witcher.jpg?alt=media&token=c5122c8f-8cdc-4101-a2fe-26c901cdb691",
 "https://firebasestorage.googleapis.com/v0/b/streamsitecity.appspot.com/o/topgun.jpg?alt=media&token=24907c5d-ba49-44be-8c2e-5382c054bed7",
 "https://firebasestorage.googleapis.com/v0/b/streamsitecity.appspot.com/o/avengers.jpg?alt=media&token=7d20afe1-1d36-4467-a23e-2d1c6abaf561"
  ];
  let cards2
  cards2=[
    "https://firebasestorage.googleapis.com/v0/b/streamsitecity.appspot.com/o/endgame.jpg?alt=media&token=a0669aeb-bde5-43e6-bac4-d61d74879b9a",
    "https://firebasestorage.googleapis.com/v0/b/streamsitecity.appspot.com/o/224a775f80315460af88e759c753bb03.jpg?alt=media&token=b0a7a7b7-f0be-43c2-8e09-e1838e86976e",
    "https://firebasestorage.googleapis.com/v0/b/streamsitecity.appspot.com/o/MV5BYTRiNDQwYzAtMzVlZS00NTI5LWJjYjUtMzkwNTUzMWMxZTllXkEyXkFqcGdeQXVyNDIzMzcwNjc%40._V1_.jpg?alt=media&token=cbd53001-389b-4cd6-b05d-aa481c615884"
];
let cards3
  cards3=[
    "https://firebasestorage.googleapis.com/v0/b/streamsitecity.appspot.com/o/MV5BZDBkZjRiNGMtZGU2My00ODdkLWI0MGYtNGU4MmJjN2MzOTkxXkEyXkFqcGdeQXVyMDM2NDM2MQ%40%40._V1_.jpg?alt=media&token=d2d7c5ec-7427-40ad-8f7c-a37411210442",
    "https://firebasestorage.googleapis.com/v0/b/streamsitecity.appspot.com/o/Tokyo_Ghoul_volume_1_cover.jpg?alt=media&token=17a1ce3d-c94f-499e-aa69-87a14ad35542",
    "https://firebasestorage.googleapis.com/v0/b/streamsitecity.appspot.com/o/224a775f80315460af88e759c753bb03.jpg?alt=media&token=b0a7a7b7-f0be-43c2-8e09-e1838e86976e"
];
// @ is an alias to /src


export default {
  name: 'HomeView',
  data: function(){
    return {
        cards: cards,
        cards2: cards2,
        cards3: cards3
    };


  },

  components: {
    box,
  },
}
</script>
