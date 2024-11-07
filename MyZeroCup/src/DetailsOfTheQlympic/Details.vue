<template>
   <div class="container">
    <div class="carousel">
        <div class="Slides">
                <img src="./images/img1.png" alt="Slide 1">
                <img src="./images/img2.png" alt="Slide 2">>
                <img src="./images/img3.png" alt="Slide 3">
                <img src="./images/img4.png" alt="Slide 4">
                <img src="./images/img5.png" alt="Slide 5">
        </div>
        </div>
       
    
    <div class="project">
      <div class="project-tab">
        <RouterLink to="/homepage"><div><button class="returnBtn"><img src="./icons/return.png" alt=""></button></div></RouterLink>  
        <div class="title"><img src="./icons/title1.png" alt=""></div>
       <div class="returnBtn" ></div>
      </div>
      <div class="title-ball"><img src="./icons/title-ball.png" alt=""></div>
      <div class="ball-project">
          <div class="ball-box"  @click="goToPingpangDetail"></div>   
          <div class="ball-box"></div>   
          <div class="ball-box"></div>   
          <div class="ball-box"></div>   
          <div class="ball-box"></div>   
          <div class="ball-box"></div>   
          <div class="ball-box"></div>   
          <div class="ball-box"></div>   
      </div>
      <div class="title-others"><img src="./icons/title-others.png" alt=""></div>
      <div class="others-project">
           <div class="others-box" @click="goToGymnastics"></div>
           <div class="others-box"></div>
           <div class="others-box"></div>
           <div class="others-box"></div>
           <div class="others-box"></div>
           <div class="others-box"></div>
           <div class="others-box"></div>
           <div class="others-box"></div>
           <div class="others-box"></div>
           <div class="others-box"></div>
           <div class="others-box"></div>
           <div class="others-box"></div>

      </div>
          
    </div>
   </div> 
        
</template>



<script lang="ts">
import { defineComponent } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import {RouterLink} from 'vue-router'

export default defineComponent({
  name: 'Details',
  setup() {
    const router = useRouter();

    const goToPingpangDetail = () => {
      router.push('/Details/Pingpong');
    };

    const goToGymnastics = () => {
      router.push('/Details/Gymnastics');
    };

  

    // Return all functions in a single object
    return {
      goToPingpangDetail,
      goToGymnastics,
   
    };
  }
});
</script>



<style>
* {
    margin:0;
    padding:0;
    list-style:none;
}
html {
  overflow-y: scroll; /* 确保内容可以滚动 */
  scrollbar-width: none; 
}
.container {
  position:relative;
  width:100%;
  height:210vh;
  /* height:100%; */
}
.carousel {
    width:100vw;
  
    margin: 0 auto;
    overflow:hidden;
    position:relative;
}
.Slides {
    display: flex;
    width:500%;
    animation:slide 15s infinite;
}
.Slides img{
    width:20%;
}
@keyframes slide {
  0%, 20% {
    transform: translateX(0);
  }
  25%, 40% {
    transform: translateX(-20%);
  }
  45%, 60% {
    transform: translateX(-40%);
  }
  65%, 80% {
    transform: translateX(-60%);
  }
  85%, 100% {
    transform: translateX(-80%);
  }
}
/* 第二个部分 */


.project {
    width:100%;
 
  
   top:75vh;
    border-top-left-radius: 5vw;
    border-top-right-radius: 5vw;
    position:absolute;
    background-color:  #87CBFF;
    z-index: 1;
}
.project-tab{
  display:flex;
  padding:5vw;
  
  justify-content:space-between;
  
}
.returnBtn {
  width:5vw;
  height:5vw;
  background-color: rgba(0,0,0,0);
  border:0;
}
.title{
  width:26vw;
  height:5vw;
  text-align:center;
}
.title img {
  width:100%;
  
}
.title-ball, .title-others {
  padding-top:5vw;
  width:39vw;
  height:3vw;
  margin:0 auto;
  text-align:center;
}
.title-ball img {
  
  height:100%;
 object-fit:fill;
}
.ball-project, .others-project{
    width:100%;
    padding-top:5vw;
    /* display:flex;
    justify-content: space-evenly; */
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr
}
.ball-box,.others-box {
  width:20vw;
  height:10vw;
  margin:2vw;
  text-align:center;
  border-radius:2vw;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* 添加阴影 */
  background-size: cover; /* 确保背景图片全覆盖 */
  background-position: center; /* 背景图片居中显示 */
  background-repeat: no-repeat; /* 防止背景图片重复 */
}
.ball-box {
  /* 初始状态的样式 */
  transition: transform 0.3s ease-out; /* 指定过渡效果 */
  transform: scale(1); /* 初始缩放比例为1 */
}

.ball-box:hover {
  /* 鼠标悬停时的样式 */
  transform: scale(1.1); /* 鼠标悬停时缩放比例变为1.1 */
}
.ball-box:nth-child(1) {
  background-image: url(./icons/pingpong-default.png);

}
.ball-box:nth-child(1):hover {
  
  background-image: url(./icons/pingpong-hover.png);

}
.ball-box:nth-child(2) {
  background-image: url(./icons/badminton-default.png);

}
.ball-box:nth-child(2):hover {
  background-image: url(./icons/badminton-hover.png);

}
.ball-box:nth-child(3) {
  background-image: url(./icons/tennis-default.png);

}
.ball-box:nth-child(3):hover {
  background-image: url(./icons/tennis-hover.png);

}
.ball-box:nth-child(4) {
  background-image: url(./icons/volleyball-default.png);

}
.ball-box:nth-child(4):hover {
  background-image: url(./icons/volleyball-hover.png);

}
.ball-box:nth-child(5) {
  background-image: url(./icons/football-default.png);

}
.ball-box:nth-child(5):hover {
  background-image: url(./icons/football-hover.png);

}.ball-box:nth-child(6) {
  background-image: url(./icons/basketball-default.png);

}
.ball-box:nth-child(6):hover {
  background-image: url(./icons/basketball-hover.png);

}.ball-box:nth-child(7) {
  background-image: url(./icons/golf-default.png);

}
.ball-box:nth-child(7):hover {
  background-image: url(./icons/golf-hover.png);

}.ball-box:nth-child(8) {
  background-image: url(./icons/hockey-default.png);

}
.ball-box:nth-child(8):hover {
  background-image: url(./icons/hockey-hover.png);

}

.others-box {
  /* 初始状态的样式 */
  transition: transform 0.3s ease-out; /* 指定过渡效果 */
  transform: scale(1); /* 初始缩放比例为1 */
}

.others-box:hover {
  /* 鼠标悬停时的样式 */
  transform: scale(1.1); /* 鼠标悬停时缩放比例变为1.1 */
}

.others-box:nth-child(1) {
  background-image: url(./icons/gymnastics-default.svg);
}
.others-box:nth-child(1):hover {
  background-image: url(./icons/gymnastics-hover.svg);
}
.others-box:nth-child(2) {
  background-image: url(./icons/bicycle-default.png);
}
.others-box:nth-child(2):hover {
  background-image: url(./icons/bicycle-hover.png);
}
.others-box:nth-child(3) {
  background-image: url(./icons/fencing-default.png);
}
.others-box:nth-child(3):hover {
  background-image: url(./icons/fencing-hover.png);
}
.others-box:nth-child(4) {
  background-image: url(./icons/weightlifting-default.png);
}
.others-box:nth-child(4):hover {
  background-image: url(./icons/weightlifting-hover.png);
}
.others-box:nth-child(5) {
  background-image: url(./icons/equestrain-default.png);
}
.others-box:nth-child(5):hover {
  background-image: url(./icons/equestrain-hover.png);
}
.others-box:nth-child(6) {
  background-image: url(./icons/rowing-default.png);
}
.others-box:nth-child(6):hover {
  background-image: url(./icons/rowing-hover.png);
}
.others-box:nth-child(7) {
  background-image: url(./icons/shotting-default.png);
}
.others-box:nth-child(7):hover {
  background-image: url(./icons/shotting-hover.png);
}
.others-box:nth-child(8) {
  background-image: url(./icons/archery-default.png);
}
.others-box:nth-child(8):hover {
  background-image: url(./icons/archery-hover.png);
}
.others-box:nth-child(9) {
  background-image: url(./icons/wrestling-default.png);
}
.others-box:nth-child(9):hover {
  background-image: url(./icons/wrestling-hover.png);
}
.others-box:nth-child(10) {
  background-image: url(./icons/track-default.png);
}
.others-box:nth-child(10):hover {
  background-image: url(./icons/track-hover.png);
}
.others-box:nth-child(11) {
  background-image: url(./icons/swim-default.png);
}
.others-box:nth-child(11):hover {
  background-image: url(./icons/swim-hover.png);
}
.others-box:nth-child(12) {
   box-shadow: none;
   background-image: url(./icons/end.png);
  height:20vw;
}
</style>