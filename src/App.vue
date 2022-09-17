<template>

    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">StreamSiteCity</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDarkDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#"><router-link to="/">Home</router-link></a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Movies
          </a>
          <ul class="dropdown-menu dropdown-menu-dark">
            <li><a class="dropdown-item" href="#"><router-link to="/horror">Horror</router-link></a></li>
            <li><a class="dropdown-item" href="#"><router-link to="/action">Action</router-link></a></li>
            <li><a class="dropdown-item" href="#"><router-link to="/family">Family</router-link></a></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Series
          </a>
          <ul class="dropdown-menu dropdown-menu-dark">
            <li><a class="dropdown-item" href="#"><router-link to="/new">New</router-link></a></li>
            <li><a class="dropdown-item" href="#"><router-link to="/trending">Trending</router-link></a></li>
            <li><a class="dropdown-item" href="#"><router-link to="/anime">Anime</router-link></a></li>
          </ul>
          
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#"><router-link to="/login">Login</router-link></a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#"><router-link to="/signup">Signup</router-link></a>
        </li>
        
      </ul>
      
    </div>
    <form class="d-flex" role="search">
        <input v-model="store.searchTerm" class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        
      </form>
  </div>
</nav>


  <router-view/>
 

  <footer class="text-center text-white fixed-bottom" style="background-color: #25BA84;">
    
    <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
      © 2022 Copyright:
      <a class="text-white" href="https://mdbootstrap.com/">streamsitecity.netifly.app</a>
    </div>
  </footer>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #f8f8f8;
  background-color: rgb(36, 33, 33);
}

nav {
  padding: 30px;
 
  a {
    font-weight: bold;
    color: #25BA84;

    &.router-link-exact-active {
      color: #2F2E2E;
    }
  }
}

body {
  background: #2F2E2E;
}
</style>
<script>
  import store from "@/store.js"

export default{
  name: "app",
  data (){
    return{
      store: store,

    }
  }

};
</script>
