<template>
 <div class="card text-center">
  <div class="card-header bg-sh">
 
  </div>
  <div class="card-body p-0 bg-sh" >
    <a :href="info.watch">
   <img class="card-img-top w-75" :src="info.url" alt="something"/>
    </a>
  </div>
  <div class="card-footer text-muted bg-sh">
    {{info.description}}
  </div>
  </div>
</template>

<script>
export default {
  props: ['info'],
  name: 'box'
  
 }

</script>

<style lang="scss">
.bg-sh{
  background-color: rgb(36, 33, 33);
  border: rgb(36, 33, 33)
  text white
  
} 
  
  
</style>
  

<!-- Add "scoped" attribute to limit CSS to this component only -->

