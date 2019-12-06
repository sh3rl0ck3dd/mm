<template>
<div>
 <div class="bannerhead">
 <div class="bannerone">
   <img class="bannerimg" src="../assets/images/blogg.jpg">
 </div>
 <div class="bannertwo">
   <p class="headblog">
     What you Gonna find in Here!
   </p>
   <p class="bannerintro">
     Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
     tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
     quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
     consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
     cillum dolore eu fugiat nulla pariatur. 
   </p>
 </div>
  
</div>
<div class="addform-butt"  v-on:click="showform = !showform">add form</div>
  <div v-if="showform" class="addform">
      <div>
    <label>name</label>
      <input type="text" v-model="blogname" >
    </div>
    <div>
    <label>text</label>
      <textarea type="text" v-model="blogtext" ></textarea>
    </div>
    <div calss="addform-butt" v-on:click="postreq">submit</div>

  </div>
<div class="mainblogs">
  <template v-for="item in blogdata">
  

  <div class="card">
  <div class="cardimgparent">
    <img class="cardimg" src="../assets/images/blogg.jpg">
  </div>
    <div class="heading">

      {{item.writer_name}}
    </div>
    <div class="desc">
      {{item.blog_text}}
    </div>
    </div>
  </template>
  </div>

</div>

</template>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bannerhead{
  text-align: center;
  display: flex;
  color: skyblue;
  margin:30px;
  border-radius: 10px; 
  padding: 40px;  
  background-color:#ffa280;
  border: 4px solid orangered;
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}
.mainblogs{
  margin: 20px 0px 0px 0px; 
  display: flex;
  margin: 20px 50px;
  flex-wrap: wrap;
}
.card{
  width: 300px;
  height: 420px;
  margin: 10px 20px;
  /*background-color: #ffc7b3;*/
  padding: 20px;
  border-radius: 10px;
  border: 2px solid orangered;
  /*box-shadow: 2px 8px 16px 0 rgba(0,0,0,0.2);*/
  box-shadow: 8px 4px 4px rgba(0,0,0,0.2);

}
.card:hover{
  transform: translateY(2px);
  box-shadow: 4px 2px 2px rgba(0,0,0,0.2);
  box-shadow: inset 0px 0px 30px 30px #ffdacc;

}
.cardimg{
  width: 240px;
  padding: 3px 30px;
  border-radius: 50%;
}
.heading{
  margin: 20px 0px 0px 0px; 
  color: orangered;
  font-size: 30px;
  text-align: center;
}
.desc{
  font-size: 18px;
  width: 100%;
}
.bannerone{
  width: 50%;
}
.bannerone:hover{
    transform: scale(1.01);
}
.bannertwo{
  width: 50%;
  padding: 0px 25px;
  background-color: white;
  border-radius: 15px;
}
.bannertwo:hover{
  box-shadow: inset 0px 0px 40px 40px #ffdacc;
}
.headblog{
  font-size: 40px;
}
.bannerintro{
  font-size: 20px;
  color: grey;
}
.bannerimg{
  width:80%;
  border-radius:10px;
}
.addform{
  align-items: center;
  text-align: center;
  margin: 20px;
  background-color: #eee;
}
.addform-butt{
  text-align: center;
  margin:20px auto;
  background-color: black;
  color:white;
  width: 100px;
  border-radius: 10px;
}
</style>
<script >
  import axios from 'axios'


   export default {

   data () {
   return {
     blogdata: [],
     showform:false,
     blogtext:"",
     blogname:"",
   }
   },
   computed: {
  },
    methods: {
  
    getblogs()
  {
       axios
      .get('http://localhost:5000/myview/list_all_blogs')
      .then(response => {
        console.log(response.data); 
        this.blogdata=response.data;
      })
      .catch(error => {
        console.log(error)
        this.errored = true
      })
      .finally(() => this.loading = false)
  },

 postreq(){

     var dataObj = {
        "blog_text":this.blogtext,
        "writer_name": this.blogname
      
       }

       var form_data = new FormData();

        for ( var key in dataObj ) {
            form_data.append(key, dataObj[key]);
        }


       axios
      .post('http://127.0.0.1:5000/myview/new_blog_post',form_data)
      .then(response => {
        console.log(response.data); 
        this.getblogs();
        
      })
      .catch(error => {
        console.log(error)
        this.errored = true
      })
      .finally(() => this.loading = false)

 }

   },
   beforeMount: function() {
     this.getblogs();

    }
   }
// {"head":"hello world","text":" Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,"},{"head":"hello world","text":" Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,"},{"head":"hello world","text":" Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,"},{"head":"hello world","text":" Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,"}



</script>