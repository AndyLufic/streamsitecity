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
 

  <div class="content-main">scroll</div>

<footer id="fh5co-footer" class="fh5co-bg" role="contentinfo">
		<div class="overlay"></div>
		<div class="container">
			<div class="row row-pb-md">
				<div class="col-md-4 fh5co-widget">
					<h3>A Little About Stamina.</h3>
					<p>Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit. Eos cumque dicta adipisci architecto culpa amet.</p>
					<p><a class="btn btn-primary" href="#">Become A Member</a></p>
				</div>
				<div class="col-md-8">
					<h3>Classes</h3>
					<div class="col-md-4 col-sm-4 col-xs-6">
						<ul class="fh5co-footer-links">
							<li><a href="#">Cardio</a></li>
							<li><a href="#">Body Building</a></li>
							<li><a href="#">Yoga</a></li>
							<li><a href="#">Boxing</a></li>
							<li><a href="#">Running</a></li>
						</ul>
					</div>

					<div class="col-md-4 col-sm-4 col-xs-6">
						<ul class="fh5co-footer-links">
							<li><a href="#">Boxing</a></li>
							<li><a href="#">Martial Arts</a></li>
							<li><a href="#">Karate</a></li>
							<li><a href="#">Kungfu</a></li>
							<li><a href="#">Basketball</a></li>
						</ul>
					</div>

					<div class="col-md-4 col-sm-4 col-xs-6">
						<ul class="fh5co-footer-links">
							<li><a href="#">Badminton</a></li>
							<li><a href="#">Body Building</a></li>
							<li><a href="#">Teams</a></li>
							<li><a href="#">Advertise</a></li>
							<li><a href="#">API</a></li>
						</ul>
					</div>
				</div>
			</div>

			<div class="row copyright">
				<div class="col-md-12 text-center">
					<p>
						<small class="block">&copy; 2017 | All Rights Reserved.</small> 
						<small class="block">Powered by  siteName.com</small>
					</p>
				</div>
			</div>

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
.content-main {
  height: 200vh;
}

.fh5co-bg {
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  position: relative;
}

.fh5co-bg {
  background-size: cover;
  background-position: center center;
  position: relative;
  width: 100%;
  float: left;
}
.fh5co-bg .overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  -webkit-transition: 0.5s;
  -o-transition: 0.5s;
  transition: 0.5s;
}

.fh5co-bg-section {
  background: rgba(0, 0, 0, 0.05);
}

#fh5co-footer {
  padding: 7em 0;
  clear: both;
}
@media screen and (max-width: 768px) {
  #fh5co-footer {
    padding: 3em 0;
  }
}

#fh5co-footer {
  position: relative;
}
#fh5co-footer .overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  -webkit-transition: 0.5s;
  -o-transition: 0.5s;
  transition: 0.5s;
}
#fh5co-footer h3 {
  margin-bottom: 15px;
  font-weight: bold;
  font-size: 15px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.8);
}
#fh5co-footer .fh5co-footer-links {
  padding: 0;
  margin: 0;
}
#fh5co-footer .fh5co-footer-links li {
  padding: 0;
  margin: 0;
  list-style: none;
}
#fh5co-footer .fh5co-footer-links li a {
  color: rgba(255, 255, 255, 0.5);
  text-decoration: none;
}
#fh5co-footer .fh5co-footer-links li a:hover {
  text-decoration: underline;
}
#fh5co-footer .fh5co-widget {
  margin-bottom: 30px;
}
@media screen and (max-width: 768px) {
  #fh5co-footer .fh5co-widget {
    text-align: left;
  }
}
#fh5co-footer .fh5co-widget h3 {
  margin-bottom: 15px;
  font-weight: bold;
  font-size: 15px;
  letter-spacing: 2px;
  text-transform: uppercase;
}
#fh5co-footer .copyright .block {
  display: block;
}


.btn-primary {
  background: #F85A16;
  color: #fff;
  border: 2px solid #F85A16;
}
.btn-primary:hover, .btn-primary:focus, .btn-primary:active {
  background: #f96c2f !important;
  border-color: #f96c2f !important;
}
.btn-primary.btn-outline {
  background: transparent;
  color: #F85A16;
  border: 1px solid #F85A16;
}
.btn-primary.btn-outline:hover, .btn-primary.btn-outline:focus, .btn-primary.btn-outline:active {
  background: #F85A16;
  color: #fff;
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
