<template>
  <div class="main">
    <div class="first">
      <div class="inside-first"> 
      <div class="logo">

        <img class="logoimage" src="../assets/images/mm_white.png">
        
      </div>
      <div class="baner-text">
          <div class="banner-text-head">
            Lorem ipsum dolor sit amet
          </div>
          <div class="banner-text-para">
            
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laborisexercitation ullamco laborisexercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat mrudul suck. 
          </div>

      </div>
      <div class="first-right">
          <div class="login">
            <div class="login-btn">Login/Signup</div>
         </div>
         <div class="blogs">
           <div class="blog-btn"><router-link class="linktag" to="/blogs">Blogs +</router-link></div>
         </div>
         
      </div>
      </div>
      <div class="inside-first-card">
        <div class="banner-card">
          <div class="banner-card-image">
            <img class="nir-img" src="../assets/images/nir.jpg">
          </div>
          <div class="banner-card-head">
            HOW WE DO IT
          </div>
          <div class="banner-card-desc">
            Consistency and proper knowledge makes everything happen click here to know more.
          </div>
        </div>
      </div>
    </div>

    <div class="second">
      <div class="second-left">
        <div class="second-img">
          <img  class="imgtwo" src="../assets/images/dumble.png">
        </div>
        <div class="second-head">
          Get Customised Plans
        </div>
        <div class="second-data">
          get workout plans designed according to your body.
        </div>
      </div>
      <div class="second-middle">
        <div class="second-img">
          <img  class="imgtwo" src="../assets/images/shirt.png">
        </div>
        <div class="second-head">
          Our Productline
        </div>
        <div class="second-data">
          Fashion that is Best for workouts and make you stand apart.
        </div>
      </div>
      <div class="second-right">
        <div class="second-img">
          <img  class="imgtwo" src="../assets/images/video.png">
        </div>
        <div class="second-head">
          Learn By watching
        </div>
        <div class="second-data">
            How to do's taught by the best in the bussiness.
        </div>
      </div>
    </div>

  

          <div class="third">
      <div class="third-child">
        <div class="third-cardone">
           <div class="banner-card cardthree">
          <div class="banner-card-image">
            <img class="nir-img" src="../assets/images/nir.jpg">
          </div>
          <div class="banner-card-head">
            HOW WE DO IT
          </div>
          <div class="banner-card-desc">
            Consistency and proper knowledge makes everything happen click here to know more.
          </div>
        </div>
      </div>
      <div class="thirdtwo">
          <img  class="thirdtwoimg" src="../assets/images/about.png">
      </div>
      <div class="thirdthree">
        <div> <img  class="thirddown" src="../assets/images/service-bg.jpg"></div>
      </div>

      <div class="thirdfur">
          Tired of How you look in mirror?
      </div>
      <div class="thirdfive">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et </p>
        <p>dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. </p>
      </div>
        </div>
      </div>   



          <div class="fourth">
        <div class="col-fourth-1">
             <div class="banner-card cardfourth">
              <div class="banner-card-image">
                <img class="nir-img-fourthcard" src="../assets/images/nir.jpg">
              </div>
              <div class="banner-card-head">
                HOW WE DO IT
              </div>
              <div class="banner-card-desc">
                Consistency and proper knowledge makes everything happen click here to know more.
              </div>
            </div>
        </div>
        <div class="col-fourth-2">
              <div class="buttoncenter-fourth">
                
                  click Here
                
              </div>

        </div>
        <div class="col-fourth-3">
             <div class="banner-card cardfourth">
              <div class="banner-card-image">
                <img class="nir-img-fourthcard" src="../assets/images/nir.jpg">
              </div>
              <div class="banner-card-head">
                HOW WE DO IT
              </div>
              <div class="banner-card-desc">
                Consistency and proper knowledge makes everything happen click here to know more.
              </div>
            </div>
        </div>
      </div>


          <div class="third">
      <div class="third-child">
        <div class="third-cardone">
           <div class="banner-card cardthree">
          <div class="banner-card-image">
            <img class="nir-img" src="../assets/images/nir.jpg">
          </div>
          <div class="banner-card-head">
            HOW WE DO IT
          </div>
          <div class="banner-card-desc">
            Consistency and proper knowledge makes everything happen click here to know more.
          </div>
        </div>
      </div>
      <div class="thirdtwo">
          <img  class="thirdtwoimg" src="../assets/images/about.png">
      </div>
      <div class="thirdthree">
        <div> <img  class="thirddown" src="../assets/images/service-bg.jpg"></div>
      </div>

      <div class="thirdfur">
          Tired of How you look in mirror?
      </div>
      <div class="thirdfive">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et </p>
        <p>dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. </p>
      </div>
        </div>
      </div>  



      <div class="morebutton">
        <div class="btn-about">Click to know more</div>
      </div>   
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.first{
  background-image: url(../assets/images/service-bg.jpg);
  background-repeat: no-repeat;
  background-size: cover  ;
  animation-duration: 1s;
  animation-name: slidein;;

}
.baner-text{
  position: absolute;
  top:240px;
  left:20px;
  color: white;
  width: 35%;
}
.banner-text-head{
  font-size: 60px;
}
.banner-text-para{
  font-size: 21px;
  text-align: center;
}
.inside-first{
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100px !important;

}

.logo{
  height: 100px;
  
  padding:30px 50px;
}
.first-right{
  padding: 30px 50px;
  display: inline-block;  
  height: 100px;

}
.login{
  display: inline-block;
  padding: 30px 10px;
  color: white;
}
.login-btn{
  padding: 10px 20px;
  /*background-color: skyblue;*/
  border: 1px solid skyblue;
  border-radius: 30px;
  font-size: 14px;
  font-weight: 700;
}
.blogs{
  padding: 30px 30px;
  display: inline-block;

}
.blog-btn{
  text-decoration: none;
  background-color: white;
  color:red;
  border-radius: 30px;
  font-size: 14px;
  font-weight: 700;
  padding: 10px 50px;
}
.inside-first{
  height: 100vh;
  position: relative;
}
.inside-first-card{
  display: flex;
  justify-content: flex-end;
}
.banner-card{
margin:  40px 30px 10px 0px;
height: 460px;
width: 250px;

background-color: white;
padding: 10px;
border-radius: 10px;
}
.banner-card-image{

}
.nir-img{
height: 300px;
}
.banner-card-head{
  text-align: center;
  margin: 5px ;
  font-weight: 400;
  font-size: 24px;

}
.banner-card-desc{
width: 100%;
text-align: center;
font-size: 18px;
}
.second{
display: flex;
justify-content: space-around;
text-align: center;
margin: 0px 40px;
margin-top: 100px;

}
.second-left{

}
.second-right{

}
.second-middle{

}
.imgtwo{
  height: 120px;
}

.second-head{
color: #00cccc;
  margin-top: 30px;
  font-size: 24px;
}
.second-data{
  margin-top: 20px;
width: 210px;
}
.third{
  margin-top: 100px;
  background-image: url(../assets/images/lightbluebg.png);
 background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  height: 800px;

}
.third-child{
  display: grid;
  height: 100%;
  width: 100%;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows:repeat(12, 1fr);
}

.third-cardone {
  grid-row: 6/12 ;
  grid-column: 2/6 ;
}
.cardthree{
  background-color:#ccffff;

}
.thirdtwo{
  grid-row:2/8;
  grid-column:5/10;
}
.thirdtwoimg{
  height: 550px;

}
.thirdthree{
  grid-row:10/12;
  grid-column:8/12;

}
.thirddown{
  transform: translate(0px , 30px);
  height: 200px;
  
}
.thirdfur{
  font-size: 50px;
  grid-row:2/4;
  grid-column:8/12;
  font-weight: 400;

}
.thirdfive{
  font-size:20px;
  font-weight: 400;

  grid-row:4/10;
  grid-column:10/12;
}
.morebutton{
  margin-top:160px;
  margin-bottom: 100px; 

}
.btn-about{
  padding: 10px 50px;
  background-color: #666666;
  border: 1px solid black;
  width: 150px;
  margin: 0px auto;
  border-radius: 15px; 
}
.linktag{
  text-decoration: none;
  color: black;
}
.logoimage{
width: 100px;
}
.fourth{
  display: flex;
  width: 100%;
  margin-top:120px;
}
.col-fourth-1{
  width: 20%;
  margin: 5%;
}
.col-fourth-2{
  background-image: url(../assets/images/center.jpg);
  width: 40%;
}
.col-fourth-3{
  width: 20%;
  margin: 5%
}
.fourth-center-img{
  width: 100%;
}
.nir-img-fourthcard{
  height: 250px ;
  margin-left:25px;
}
.cardfourth{

  background-color:#ccffff;
  height: 38  0px;


}
.buttoncenter-fourth{
  background-color: black;
  padding: 20px 40px;
  text-align: center;

  border-radius: 30px;
  color:white;
  width:90px;
  transform:translate(100%,500%);
  cursor: pointer;
}
.buttoncenter-fourth:hover{
  background-color: white;
  color:black;

}








@keyframes slidein {
  from {
    margin-left: -100%;
  }

  to {
    margin-left: 0%;
  }
}

</style>
<script ></script>