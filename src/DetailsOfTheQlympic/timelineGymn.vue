<template>
    <div class="shell" id="shell" ref="shellRef">
      <div class="header">
        <img src="./images/img-gymn/history.svg" alt="" />
      </div>
      <div class="timeline">
        <div class="item" ref="item1Ref" data-text="艺术体操的起源">
          <div class="content">
            <img src="./images/img-gymn/historyBg1.svg" alt="" class="img" />
            <h2 class="content-title">19世纪末--起源</h2>
            <p class="content-desc">
              艺术体操起源于19世纪末至20世纪初的欧洲，它最初是作为一种女性健身和优雅举止的训练方式。早期的艺术体操结合了芭蕾舞和体操动作，旨在通过舞蹈般的动作来提高身体的灵活性和协调性。
            </p>
          </div>
        </div>
        <div class="item" ref="item2Ref" data-text="国际艺术体操联合会的成立">
          <div class="content">
            <img src="./images/img-gymn/historyBg2.svg" alt="" class="img" />
            <h2 class="content-title">1963--成立协会</h2>
            <p class="content-desc">
              国际艺术体操联合会（IFAGG）在瑞士成立，这标志着艺术体操开始朝着国际化和专业化的方向发展。IFAGG负责制定比赛规则、组织国际比赛，并推动艺术体操在全球的普及。
            </p>
          </div>
        </div>
        <div class="item" ref="item3Ref" data-text="艺术体操成为奥运会正式比赛项目">
          <div class="content">
            <img src="./images/img-gymn/historyBg3.svg" alt="" class="img" />
            <h2 class="content-title">1984--成为奥运项目</h2>
            <p class="content-desc">
              艺术体操首次成为奥运会的正式比赛项目。这一事件极大地提升了艺术体操的国际地位，同时也为运动员提供了在世界最高体育舞台上展示技巧和艺术表现力的机会。
            </p>
          </div>
        </div>
        <div class="item" ref="item4Ref" data-text="规则和评分系统的改革">
          <div class="content">
            <img src="./images/img-gymn/historyBg4.svg" alt="" class="img" />
            <h2 class="content-title">1990--改革</h2>
            <p class="content-desc">
              艺术体操的规则和评分系统经历了重大改革，引入了难度系数和艺术表现分的概念，使得比赛更加公正和透明。这些改革促进了艺术体操技术的发展，提高了比赛的观赏性。
            </p>
          </div>
        </div>
        <div class="item" ref="item5Ref" data-text="艺术体操项目的扩展和普及">
          <div class="content">
            <img src="./images/img-gymn/historyBg5.svg" alt="" class="img" />
            <h2 class="content-title">21世纪--发展</h2>
            <p class="content-desc">
              进入21世纪，艺术体操的项目不断扩展，包括个人全能、团体赛、球、圈、棒、带等多种器械比赛。同时，艺术体操在全球范围内得到了更广泛的普及，不仅在女子项目中流行，男子艺术体操也逐渐受到关注。
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
  
  <style scoped>
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
    height:80vh;
    left:15vw;
    margin:5vh 0;
    transition: 0.5s;
    opacity: 0.3;
    position:relative;
    text-align: right;
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
    }
    .item:nth-child(even){
      width:80vw;
      left:10vw;
      margin:40vw 0;
    }
    } 
  </style>