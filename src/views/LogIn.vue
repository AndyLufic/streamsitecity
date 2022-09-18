<template>
  <div class="logindiv">
  <div class="about">

  <div class="container">
  <div class="row">
  <div class="col-sm"></div>
  <div class="col-sm">

  <form class="position-absolute top-50 start-50 translate-middle">
  <h1>This is an login page</h1>

  <div class="form-group">
  <label for="exampleInputEmail1">Email address</label>
  <input type="email" v-model="email" class="form-control"
 id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter
 email" />
  <small id="emailHelp" class="form-text text-muted" >We'll
 never share your email with anyone else.</small>
  </div>

  <div class="form-group">
  <label for="exampleInputPassword1">Password</label>
  <input type="password" v-model="password" class="form-control"
 id="exampleInputPassword1" placeholder="Password" />
  </div>

  <button type="button" @click= "login()" class="btn btn-primary">Login</button>

  </form>
  </div>
  <div class="col-sm"></div>
  </div>
  </div>

  </div>
</div>
 </template>


<script >


  import { auth, signInWithEmailAndPassword } from "@/firebase";
 
  export default{
      name: "login",
   data() {
      return {
        email: "",
       password: "",
    };
  }, 
  methods: {
    login() {

      signInWithEmailAndPassword(auth, this.email, this.password)
        .then((result) => {
          this.$router.replace({ name: "home" });
          console.log('Login Successful', result);

        })
        .catch((error) => {
          alert(error);
        });
    },
  }
  }

 

</script>
 <style scoped>
   .form-group{
    margin-top: 20px;
    margin-bottom: 20px;
   }
  </style>
