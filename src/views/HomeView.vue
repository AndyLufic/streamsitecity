<template>
  <div class="home">
    <div class="col-12 text-center mt-5">
      <h1 class="text-white pt-4 ">Recommended</h1>
     </div>
    <div class="container">
      <div class="row my-5">
        <div class="col-md-4 my-4">
          <img src="img/avengers.jpg" alt="" class="w-100">
          <h4 class="text-white my 4">Avengers</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
