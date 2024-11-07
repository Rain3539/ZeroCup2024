<template>
<div class="container">
     <div class="top">
         <button class="returnButton" type="button" @click="goToDetails"><img src="./icons/return.png" alt=""></button>
         <div class="title-pingpong">乒乓球</div>
     </div>
     <div class="instruction"><img src="./images/pingpongInstruction.png" alt=""></div>
     <div class="modelRank"><img src="./images/modalRanking.svg" alt=""></div>
     <div class="gradient"></div>


     
     

</div>
<timelinePingpong></timelinePingpong>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { useRouter } from 'vue-router';
  import timelinePingpong from './timelinePingpong.vue';
    

  export default defineComponent({
    name: 'Pingpong',
    components: {
    timelinePingpong,
    },
    setup() {
      window.scrollTo(0,0);
      const router = useRouter();
      const goToDetails = () => {
        router.push('/Details');
      };
      return {
        goToDetails
      };
    }
  });
</script>



<style scoped>
 * {
  margin: 0;
  padding: 0;
  list-style: none;
}

html {
  overflow-y: scroll;
  scrollbar-width: 0;
}
.container {
  position:relative;
  width:100%;
  height:140vw;
 background-color: #87CBFF;
 z-index:1000;
}

.top {
    width:100%;
    height:50vw;
    position:relative;
    background-size: cover; 
    background-position: center; 
    background-repeat: no-repeat; 
    background-image: url(./images/pingpong1.png);
}
.top::before,
.top::after {
   
    content:'';
    position:absolute;
    width:100%;
    background: linear-gradient(to bottom, #87CBFF, rgba(135, 203, 255, 0));
}
.top::before {
    top:0;
    height:10vw;
    pointer-events: none;
}
.top::after 
 {
    bottom:0;
    height:20vw;
    background:linear-gradient(to top, #87CBFF, rgba(135, 203, 255, 0));
} 
.gradient {
  width:100vw;
  height:20vw;
  top:89vw;
  position:relative;
  background: linear-gradient(to bottom, #87CBFF, rgba(135, 203, 255, 0))!important;
  z-index:100;
  
}
button {
    margin:0;
    padding:0;
    border:none;
}
.returnButton {
    margin:2vw;
    width:5vw;
    height:5vw;
    background-color: rgba(0,0,0,0);
    z-index:100;
}
.title-pingpong {
    position:relative;
    margin:0 auto;
    top:5vw;
    width:30vw;
    height:20vw;
    background-size: cover; 
    background-position: center;
    background-repeat: no-repeat; 
    background-image: url(./images/gradient-black.png);
    color:white;
    display: flex; 
    justify-content: center; 
    align-items: center; 
    font-size:10vw;
}
.instruction,
.modelRank
{
    width:70vw;
    height:30vw;
    position:absolute;
    margin:0 15vw;
    top:35vw;
    text-align:center;
}
.instruction img {
  
  height:100%;
  object-fit:fill;
}
.modelRank {
  top:70vw;
  width:100%;
  height:70vw; 
  position:absolute;
  margin:0 auto;
  display: flex;
  justify-content: center;
  align-content:center;
  background-size: cover; 
    background-position: center;
    background-repeat: no-repeat; 
  background-image: url(./images/modleRankBg.svg);
} 
.modelRank img{
  height:80%;
  box-shadow: rgba(135, 203, 255, 0);
}

.modelDetail{
  
  width:40vw;
  height:10vw;
  position:relative;
  top:90vw;
  margin:0 auto;
  align-content:center;
  text-align:center;
  color:#004793;
  background-color: white;
  border-radius:5vw;
}
.tab {
  width:100%;
  top:100vw;
  height:10vw;
  position:relative;
  display:flex;
  justify-content: space-around;
  align-items: center;
}
.tab-content {
   width:10vw;
   height:5vw;

}
</style> 