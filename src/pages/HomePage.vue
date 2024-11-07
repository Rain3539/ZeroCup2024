<template>
    <div class="top">
        <RouterLink to="/"><img src="../images/HomePageImg/back.png" class="back"></RouterLink>
        <div><img src="../images/HomePageImg/OlympicRings.png" class="OlympicRings"></div>
        <div class="title">
            <div class="part blue">O</div>
            <div class="part black">L</div>
            <div class="part red">Y</div>
            <div class="part yellow">M</div>
            <div class="part green">P</div>
            <div class="part pink">I</div>
            <div class="part purple">C</div>
        </div>
    </div>
    <div id="danmu-container" ref="container"></div>
    <NewsPhoto></NewsPhoto>
    <div><img src="../images/HomePageImg/wave_1.png"  class="wave wave_1"></div>
    <div><img src="../images/HomePageImg/wave_2.png"  class="wave wave_2"></div>
    <div><img src="../images/HomePageImg/wave_3.png"  class="wave wave_3"></div>
    <div><img src="../images/HomePageImg/wave_4.png"  class="wave wave_4"></div>
    <div><img src="../images/HomePageImg/wave_5.png"  class="wave wave_5"></div>
    <div><img src="../images/HomePageImg/wave_6.png"  class="wave wave_6"></div>
    <div class="bottom"></div>
    <img src="../images/HomePageImg/angle-double-down.svg" class="down">
    <img src="../images/HomePageImg/tennis.png" class="tennis">
    <img src="../images/HomePageImg/surfing.png" class="surfing">
    <img src="../images/HomePageImg/skiing.png" class="skiing">
    <img src="../images/HomePageImg/skateboarding.png" class="skateboarding">
    <img src="../images/HomePageImg/pingpong.png" class="pingpong">
    <img src="../images/HomePageImg/volleyball.png" class="volleyball">
    <img src="../images/HomePageImg/dance.png" class="dance">
    <RouterLink to="/Details"><img src="../images/HomePageImg/OlympicDetails.png"  class="OlympicDetails"></RouterLink>
    <RouterLink to="/ChineseProud"><img src="../images/HomePageImg/ChinesePride.png" class="ChinesePride"></RouterLink>
</template>

<script lang="ts">
import NewsPhoto from "../components/NewsPhoto.vue";
export default {
    name: "HomePage",
    components: {NewsPhoto}
}
</script>

<script setup lang="ts">
import { onMounted,ref } from "vue";
import {RouterLink} from 'vue-router'

const container = ref<HTMLVideoElement | null>(null);
let randomColorIndex = 0;
let timer;
let index = 0;
const danmuList = [
    '40金牌数创境外参加奥运会最好成绩',
    '马龙奥运六金王！！！',
    '夏日烈阳信念已然上膛',
    '中国花样游泳队奥运历史首金！',
    '王楚钦孙颖莎圆梦巴黎！',
    'QueenWen创造历史!!!',
    '恭喜樊振东获得超级全满贯',
    '即使天赋异禀，但仍前路漫漫',
    '艺体队：场上惊鸿影，疑是画中仙',
    '用新速度创下新高度',
    '男子500米双人划艇夺金！！',
    '张博恒无冕之王',
    '@光靠干饭就 夺得巴黎奥运会首金',
    '全红蝉：小小巴黎拿捏！',
    '这一天的十米高台没有失败者',
    '跟着我，直到超过我',
    '恭喜梦姐卫冕女单冠军',
    '中国女子拳击队搬山、倒海、摘星、开天',
    '恭喜中国射击队5金2银3铜收官！',
    '这将是我们中国游泳队繁荣昌盛的开始',
    '板台第一人',
    '共生共舞于华夏江河',
    '世界的形状由我们breaking',
    '李雯雯金牌！克服伤病，心愿成真',
    '谢思埸男子三米板卫冕',
    '雅思宇宙最强混双',
    '东方破晓潘展乐',
    '巩立姣五经奥运辛苦了',
    '你好，掌管双杠的神',
    '中流击水，浪遏飞舟'
];
const addTextDanmu = (text:string) => {
    const span = document.createElement('span');
    const colors = ['rgba(192, 130, 255, 0.6)', 'rgba(130, 165, 255, 0.6)',
        'rgba(140, 255, 130, 0.6)', 'rgba(130, 255, 224, 0.6)', 'rgba(251, 255, 130, 0.6)',
        'rgba(255, 130, 130, 0.6)', 'rgba(130, 222, 255, 0.6)'];
    if (randomColorIndex >= colors.length) {
        randomColorIndex = 0;
    }
    const randomColor = colors[randomColorIndex];
    span.textContent = text;
    span.style.position = 'absolute';
    span.style.top = Math.random() * (container.value!.offsetHeight - span.offsetHeight) + 'px';
    span.style.left = '0';
    span.style.animation = 'danmu-slide 15s linear forwards';
    span.style.whiteSpace = 'nowrap'; 
    span.style.color = 'black'; 
    span.style.fontFamily = 'Arial'; 
    span.style.fontWeight = 'bold';
    span.style.fontSize = '15px'; 
    span.style.backgroundColor = randomColor; 
    span.style.width = 'auto'; 
    span.style.height = '10px'; 
    span.style.padding = '10px'; 
    span.style.borderRadius = '30px'; 
    span.style.boxShadow = '0px 0px 10px rgba(0, 0, 0, 0.5)'; 
    span.style.display = 'flex'; 
    span.style.alignItems = 'center'; 
    span.style.justifyContent = 'center'; 
    span.style.zIndex = '0'; 
    span.style.opacity = '0.8';
    span.addEventListener('animationend', () => {
        container.value!.removeChild(span);
    });
    container.value!.appendChild(span);
    randomColorIndex++;
    };
onMounted(() => {
        window.scrollTo(0, 0);
        const styleSheet = document.createElement('style');
        const keyframesRule = '@keyframes danmu-slide { from { left: -30%; } to { left: 100%; } }';
        styleSheet.appendChild(document.createTextNode(keyframesRule));
        document.head.appendChild(styleSheet);
        const createDanmu = () => {
            if (index >= danmuList.length) {
                index = 0;
            }
            addTextDanmu(danmuList[index]);
            index++;
        };
        createDanmu();
        timer = setInterval(createDanmu, 2000);
    });

</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
    gap: 0px;
    opacity: 0px;
    scroll-behavior: smooth;
}
#danmu-container {  
    position: absolute;  
    width: 100vw;  
    height: 85vh;  
    top: 9%;
    pointer-events: none;
}  
.back {
    position: absolute;
    top:2%;
    left:1%;
}
.top {
    width: 100vw;
    height: 19.38vh;
    background: linear-gradient(180deg, #8CD8FF 0%, rgba(140, 216, 255, 0) 100%);
}

.title {
    position: absolute;
    width: 11.19vw;
    height: 6.07vh;
    top: 4%;
    left: 48.5%;
    font-family: Inter;
    font-size: 2.5rem;
    font-weight: 400;
    line-height: 6.22vh;
    text-align: center;
    color: #FFFFFF;
    display: flex;
    flex-direction: row;
    justify-content: center;
}
@font-face {
    font-family: 'MyContentFont';
    src: url('../images/EnterImg/Round.otf') format('truetype');
}
.part {
    margin: 0.21vw;
    padding: 0;
    width: 5.6vw;
    height: 3.88vh;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'MyContentFont';
}

@keyframes grow {
    12.5% {
        height: 10px;
    }

    25% {
        height: 30px;
    }

    100% {
        height: 30px;
    }
}

.blue {
    color: rgba(33, 103, 173, 1);
    animation: grow ease-in-out infinite 7s;
}
.black {
    color: rgba(0, 0, 0, 1);
    animation: grow ease-in-out infinite 7s;
    animation-delay: 1s;
}

.red {
    color: rgba(237, 11, 0, 1);
    animation: grow ease-in-out infinite 7s;
    animation-delay: 2s;
}

.yellow {
    color: rgba(255, 166, 0, 1);
    animation: grow ease-in-out infinite 7s;
    animation-delay: 3s;
}

.green {
    color: rgba(54, 162, 60, 1);
    animation: grow ease-in-out infinite 7s;
    animation-delay: 4s;
}

.pink {
    color: rgba(0, 0, 0, 1);
    animation: grow ease-in-out infinite 7s;
    animation-delay: 5s;
}

.purple {
    color: rgba(33, 103, 173, 1);
    animation: grow ease-in-out infinite 7s;
    animation-delay: 6s;
}

.OlympicRings {
    position: absolute;
    width: 10vw;
    height: 11vh;
    top: 2%;
    left: 35%;
}
.wave {
    position:absolute;
    width: 100vw;
    z-index: -1;
}
.wave_1 {
    height: 35.17vw;
    top: 44.31vh;
}
.wave_2 {
    height: 29.44vw;
    top: 54.91vh;
}
.wave_3 {
    height: 24.9vw;
    top: 63.31vh;
}
.wave_4 {
    height: 21.61vw;
    top: 65.63vh;
}
.wave_5 {
    height: 27.13vh;
    top: 76.87vh;
}
.wave_6 {
    height: 14.69vw;
    top: 82vh;
    left: 0;
}
.bottom {
    position: absolute;
    width: 100%;
    height: 109vh;
    top: 104vh;
    background: #3686FF;
}

.down {
    position:absolute;
    left: 49vw;
    transform: translateX(-50%);
    top:84vh;
    animation: blinks 2s ease-in-out infinite;
}
@keyframes blinks {
    0%,100% {
        opacity: 0;
    }
    50% {
        opacity: 1;
    }
}
.tennis {
    position:absolute;
    width: 13.99vw;
    height: 25.65vh;
    top: 73.6vh;
    left: 6vw;
    z-index: 1000;
    animation: rotate1 3s linear infinite; /* 设置旋转动画 */  
}
@keyframes rotate1 {  
    0% {  
        transform: rotate(0deg); /* 从初始角度开始 */  
    }  
    50% {  
        transform: rotate(30deg); 
    } 
    100% {
        transform: rotate(0deg);
    } 
}  

.surfing {
    position:absolute;
    width: 11.53vw;
    height: 23.71vh;
    top: 73.77vh;
    left: 82.38vw;
    z-index: 1000;
    animation: slide1 4s linear infinite; /* 动画效果 */  
}
@keyframes slide1 {  
    0% {  
        transform: translateX(0);  
    }  
    50% {  
        transform: translateX(-60%); /* 向左移动到容器宽度的60% */  
    }  
    100% {  
        transform: translateX(0); /* 回到起始位置 */  
    }  
}  
.skiing {
    position:absolute;
    width: 13.98vw;
    height: 23.13vh;
    top: 122.74vh;
    left: 0;
    animation: slide2 3s linear infinite; /* 设置滑动动画 */ 
}
@keyframes slide2 {  
    0% {  
        transform: translate(0, 0); /* 从起始位置开始 */  
    }  
    50% {  
        transform: translate(70px, 70px); /* 向右下方移动 100px */  
    }
    100% {  
        transform: translate(0, 0); 
    }  
}  
.skateboarding {
    position:absolute;
    width: 12.67vw;
    height: 23.39vh;
    top: 111.11vh;
    left: 76vw; 
    animation: slide3 1.5s linear infinite; /* 设置滑动动画 */ 
}
@keyframes slide3 {  
    0% {  
        transform: translateY(0); /* 从起始位置开始 */  
    }  
    50% {  
        transform: translateY(5%); /* 向下移动到容器高度的100% */  
    }  
    100% {  
        transform: translateY(0); /* 回到起始位置 */  
    }  
}  
.pingpong {
    position:absolute;
    width: 11.12vw;
    height: 20.49vh;
    top: 155.06vh;
    left: 87.41vw;
    animation: rotate2 2s linear infinite; /* 设置旋转动画 */  
}
@keyframes rotate2 {  
    0% {  
        transform: rotate(0deg); /* 从初始角度开始 */  
    }  
    50% {  
        transform: rotate(40deg); 
    } 
    100% {
        transform: rotate(0deg);
    } 
}  
.volleyball {
    position:absolute;
    width: 9.65vw;
    height: 17.83vh;
    top: 191vh;
    left: 5.94vw;
    animation: slide3 1s linear infinite; /* 动画效果 */  
}
@keyframes slide3 {  
    0% {  
        transform: translateY(0); /* 从起始位置开始 */  
    }  
    50% {  
        transform: translateY(20%); /* 向下移动到容器高度的100% */  
    }  
    100% {  
        transform: translateY(0); /* 回到起始位置 */  
    }  
}  
.dance {
    position:absolute;
    width: 9.89vw;
    height: 21.96vh;
    top: 189vh;
    left: 77vw;
    animation: rotate3 2s linear infinite; /* 设置旋转动画 */  
}
@keyframes rotate3 {  
    0% {  
        transform: rotate(-10deg); /* 从初始角度开始 */  
    }  
    50% {  
        transform: rotate(20deg); 
    } 
    100% {
        transform: rotate(-10deg);
    } 
}  
.OlympicDetails {
    position: absolute;
    width: 54.69vw;
    height: 69.51vh;
    top: 101.16vh;
    left: 23vw;
    padding: 0 2.13vw 2.71vh 0;
    transition: transform 0.3s ease; /* 设置平滑过渡效果 */  
}

.OlympicDetails:hover {
    transform: translateY(-30px); /* 鼠标悬停时向上浮动 30 像素 */  
}

.ChinesePride {
    position: absolute;
    width: 52.55vw;
    height: 66.8vh;
    top: 131.78vh;
    left: 24.1vw;
    transition: transform 0.3s ease; /* 设置平滑过渡效果 */
}

.ChinesePride:hover {
    transform: translateY(-30px); /* 鼠标悬停时向上浮动 30 像素 */  
}
</style>