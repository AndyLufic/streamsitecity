<template>
    <div>
        <h1>Admin panel</h1>
        <form>
            <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="" v-model="addimage" class="form-control"
   id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="image" />
   <input type="" v-model="deskript" class="form-control"
   id="exampleInputEmail1" aria-describedby="description" placeholder="description" />
   <input type="" v-model="watch" class="form-control"
   id="exampleInputEmail1" aria-describedby="description" placeholder="Link" />

    
    </div>
   <button type="button" @click="changeimage()"  class="btn btn-primary">Submit</button>
        </form>
    </div>
</template>
<script>
import {db, addDoc, collection } from "@/firebase";

export default {
    
   name: "adminpanel", 
   data(){
    return {
        addimage: "",
        deskript: "",
        watch: "", 
        
        
    }

   }, 
   methods:{
    changeimage(){
        const docRef = addDoc(collection(db, "filmovi"), {
          link: this.addimage,
          deskription: this.deskript,
          watch: this.watch, 
          
          
        });
        this.$router.go(this.$router.currentRoute)
      }

   }
    
}
</script>
