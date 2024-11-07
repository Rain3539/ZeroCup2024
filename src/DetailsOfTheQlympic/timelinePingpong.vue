<template>
    <div class="shell" id="shell" ref="shellRef">
      <div class="header">
        <img src="./icons/PingpongHistory.svg" alt="" />
      </div>
      <div class="timeline">
        <div class="item" ref="item1Ref" data-text="《你的孤独，虽败犹荣》">
          <div class="content">
            <img src="./images/historyBg1.png" alt="" class="img" />
            <h2 class="content-title">19世纪末--起源</h2>
            <p class="content-desc">
              乒乓球起源于英国，最初作为一种室内娱乐活动出现。由于受到场地和天气的限制，英国大学生将网球运动转移到室内，使用餐桌作为球台，书籍作为球网，羊皮纸作为球拍，在餐桌上进行游戏。这标志着乒乓球的诞生。

            </p>
          </div>
        </div>
        <div class="item" ref="item2Ref" data-text="《你的孤独，虽败犹荣》">
          <div class="content">
            <img src="./images/historyBg2.png" alt="" class="img" />
            <h2 class="content-title">1926--成立协会</h2>
            <p class="content-desc">
              国际乒乓球联合会（ITTF）正式成立，并决定举行第一届世界乒乓球锦标赛。这标志着乒乓球正式成为一项国际性运动，规则逐渐完善，球拍和球的材质也得到了改进。
            </p>
          </div>
        </div>
        <div class="item" ref="item3Ref" data-text="《你的孤独，虽败犹荣》">
          <div class="content">
            <img src="./images/historyBg3.png" alt="" class="img" />
            <h2 class="content-title">1959--世乒赛夺冠</h2>
            <p class="content-desc">
              中国选手容国团在第25届世乒赛中获得男子单打冠军，这是新中国成立后的第一个世界冠军，也成为中国乒乓球和中国体育腾飞的起点。此后，中国乒乓球开始在世界上称霸。 
            </p>
          </div>
        </div>
        <div class="item" ref="item4Ref" data-text="《你的孤独，虽败犹荣》">
          <div class="content">
            <img src="./images/historyBg4.png" alt="" class="img" />
            <h2 class="content-title">1988--成为奥运项目</h2>
            <p class="content-desc">
              乒乓球首次被列为奥运会正式比赛项目，这进一步推动了乒乓球运动的全球普及和发展，使得乒乓球运动员有机会在奥运会上争夺荣誉。
            </p>
          </div>
        </div>
        <div class="item" ref="item5Ref" data-text="《你的孤独，虽败犹荣》">
          <div class="content">
            <img src="./images/historyBg5.png" alt="" class="img" />
            <h2 class="content-title">2017--乒乓混双</h2>
            <p class="content-desc">
              国际乒联官网宣布，乒乓球混双将成为东京奥运会正式比赛项目。这一决定为乒乓球运动增添了新的竞技项目，同时也为各国乒乓球队提供了更多的夺金机会。 
            </p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, onMounted, ref } from 'vue';
  
  export default defineComponent({
    setup() {
      let shellRef = ref<HTMLElement | null>(null);
      let item1Ref = ref<HTMLElement | null>(null);
      let item2Ref = ref<HTMLElement | null>(null);
      let item3Ref = ref<HTMLElement | null>(null);
      let item4Ref = ref<HTMLElement | null>(null);
      let item5Ref = ref<HTMLElement | null>(null);
      onMounted(() => {
        // window.scrollTo(0,0);
        shellRef.value = document.querySelector('.shell');
        item1Ref.value = document.querySelector('.item');
        item2Ref.value = document.querySelector('.item:nth-child(2)');
        item3Ref.value = document.querySelector('.item:nth-child(3)');
        item4Ref.value = document.querySelector('.item:nth-child(4)');
        item5Ref.value = document.querySelector('.item:nth-child(5)');
        
      initTimeline();
      window.addEventListener('scroll', handleScroll)
   

    });
      const initTimeline = () => {
        if (item1Ref.value && shellRef.value) {
          shellRef.value.classList.add("addBg");
          
          item1Ref.value.classList.add("item--active");
   
      }
      }
      const handleScroll = () =>{
        if (shellRef.value && item1Ref.value && item2Ref.value && item3Ref.value && item4Ref.value && item5Ref.value) {
        const itemRects = [
          item1Ref.value!.getBoundingClientRect(),
          item2Ref.value!.getBoundingClientRect(),
          item3Ref.value!.getBoundingClientRect(),
          item4Ref.value!.getBoundingClientRect(),
          item5Ref.value!.getBoundingClientRect(),
        ];
        let activeItemIndex = -1;
        for(let i =0;i<itemRects.length;i++){
          const itemRect = itemRects[i];
          const viewportHeight = window.innerHeight;
          const vwValueInPixels = parseFloat(getComputedStyle(document.documentElement).fontSize) * 30;
          if(itemRect.bottom >= viewportHeight - vwValueInPixels){
             activeItemIndex = i;
             break;
          }
        }
        const items = [item1Ref.value, item2Ref.value, item3Ref.value, item4Ref.value, item5Ref.value];
        items.forEach((item, index) => {
          if (item) {
            item.classList.remove('item--active');
          }
        });
        if (activeItemIndex!== -1) {
          const activeItem = items[activeItemIndex];
          if (activeItem) {
            activeItem.classList.add('item--active');
            const imgElement = activeItem.querySelector('.img') as HTMLImageElement | null;
            if (imgElement) {
              shellRef.value.classList.remove('addBg');
              shellRef.value.classList.add('newBgStyle');
              shellRef.value.style.backgroundImage=`url(${imgElement.src})`;
            }
          }
        }
        }
      }
    }
})
  </script>
  
  <style>
    * {
      padding: 0;
      margin: 0;
    }
  .shell {
    width:100%;
    height:100%;
    position:relative;
    transition: 0.3s ease 0s;
  }
  .addBg{
    background-attachment: fixed;
    background-size: cover;
    background-repeat: no-repeat; 
    background-image: url(./images/historyBg1.png)!important;
  }

  .newBgStyle {
    background-attachment: fixed;
    background-size: cover;
    background-repeat: no-repeat;
    /* 这里设置默认背景图片或留空，在 JavaScript 中根据需要设置具体的背景图片 */
}
  .header {
      width: 100%;
      text-align: center;
    
      margin-bottom: 10vw;
      position: relative;
      font-size: 4vw;
      color: white;
      z-index:10000;
    }
  
  .title {
      color: #fff;
      font-size: 3vw;
      font-weight: normal;
      margin: 0;
      
    }
  
  .timeline {
      display: flex;
      margin: 0 auto;
      flex-wrap: wrap;
      flex-direction: column;
   
      position: relative;
    }
  
  .content-title {
      font-weight: normal;
      font-size: 45px;
      margin: -10px 0 0 0;
      transition: 0.4s;
      padding: 0 10px;
      box-sizing: border-box;
      color: #fff;
    }
  
  .content-desc {
      margin: 0;
      font-size: 20px;
      box-sizing: border-box;
      color: rgba(255, 255, 255, 0.7);
      line-height: 25px;
    }
  
  .timeline:before {
      position: absolute;
      left: 50%;
      width: 2px;
      height: 100%;
      margin-left: 0px;
      content: '';
      background: rgba(255, 255, 255, 0.7); 
      
    }
   
   .item {
    width:25vw;
    height:60vh;
    left:15vw;
    margin:5vw 0;
    transition: 0.5s;
    opacity: 0.3;
    position:relative;
   }
   .item:nth-child(even){
    left:60vw;
   }

   .item--active {
    width:28vw;
    opacity: 1;
    filter: blur(0px);
   }
  
  
  
  .img {
      max-width: 100%;
      box-shadow: 0 10px 15px rgba(0, 0, 0, 0.4);
    }
  
  .subtitle {
      color: rgba(255, 255, 255, 0.5);
      font-size: 16px;
      letter-spacing: 5px;
      margin: 10px 0 0 0;
      font-weight: normal;
    }
  
  .footer {
      padding: 95px 0;
      text-align: center;
    }
  
  .footer a {
      color: #999;
      display: inline-block;
    }
  
    
  
    @media only screen and (max-width: 767px) {
    .timeline:before {
        display: none;
      }
    .item {
      width:80vw;
      left:10vw;
      margin:40vw 0;
      height:30vh;
    }
    .item:nth-child(even){
      width:80vw;
      left:10vw;
      margin:40vw 0;
      height:30vh;
    }
    } 
  </style>