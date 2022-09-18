<template>
    <div class="about">
    
    <div class="container">
    <div class="row">
    <div class="col-sm"></div>
    <div class="col-sm">

    <form class="position-absolute top-50 start-50 translate-middle">
    <h1>This is a signup page</h1>

    <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" v-model="username" class="form-control"
   id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
    <small id="emailHelp" class="form-text text-muted" >We'll
   never share your email with anyone else.</small>
    </div>


     <div class="form-group">
    <label for="exampleInputPassword">Password</label>
    <input type="password" v-model="password" class="form-control"
   id="exampleInputPassword" placeholder="Password" />
    </div>


    <button type="button" @click="register()" class="btn btn-primary">Submit</button>

    </form>

    </div>
    <div class="col-sm"></div>
    </div>
    </div>
    </div>
   </template>

<script >


    import { auth, createUserWithEmailAndPassword } from "@/firebase";

    export default{
        name: "signup",
     data() {
        return {
          email: "",
         password: "",
      };
    }, 
    methods: {
        register(){
        createUserWithEmailAndPassword(auth, this.email, this.password)
              .then(console.log("Uspjesna registracija"))
              .catch(function (error) {
                alert(error);
              });

    }
    }
    }
    
   
 
</script>

   <style scoped>
   .form-group{
    margin-top: 20px;
    margin-bottom: 20px;
   }

   </style>