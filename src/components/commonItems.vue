<script setup>
const data = defineProps(["event"])
let state;
function show() {
    let back = document.getElementsByClassName("back")[data.event.id];
    back.style.opacity = 1;
    let commonItem = document.getElementsByClassName("commonItem")[data.event.id];
    commonItem.style.height = "auto";
}
function dispear() {
    let back = document.getElementsByClassName("back")[data.event.id];
    back.style.opacity = 0;
    let commonItem = document.getElementsByClassName("commonItem")[data.event.id];
    commonItem.style.height = "35vh";
}
</script>
<template>
    <div class="commonItem card2" @mouseenter="show" @mouseleave="dispear">
        <div class="front">
            <img :src="data.event.pic" class="img">
            <div class="box2">
                <div class="eventName">{{ data.event.name }}</div>
                <div class="detailed medals">
                    <div class="oneMedal">
                        <img src="../../public/source/svg/goldMedal.svg" class="pic">
                        <p class="letter">{{ data.event.medal[0] }}金</p>
                    </div>
                    <div class="oneMedal">
                        <img src="../../public/source/svg/silverMedal.svg" class="pic">
                        <p class="letter">{{ data.event.medal[1] }}银</p>
                    </div>

                    <div class="oneMedal">
                        <img src="../../public/source/svg/bronzeMedal.svg" class="pic">
                        <p class="letter">{{ data.event.medal[2] }}铜</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="back">
            <div class="leftItem">
                <div class="eventName">{{ data.event.name }}</div>
                <img :src="data.event.pic" class="img">

            </div>
            <div class="rightItem">
                <span class="name">参赛运动员：</span>
                <div class="players">
                    <div v-for="player in data.event.player">
                        <p class="player">{{ player }}</p>
                    </div>
                </div>
                <div class="describe"><span class="name">卓越成绩：</span>
                    {{ data.event.describe }}</div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.commonItem {
    height: 35vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 120vw;
    transition: width 1.2s;
}

.card2 {
    width: 60vw;
    border-radius: 30px;
    position: relative;
    cursor: pointer;
    box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.279);
    transform-style: preserve-3d;
    animation: rotate-reverse 1.2s cubic-bezier(0.66, -0.47, 0.33, 1.5) forwards;
    background-color: aliceblue;
}

.card2:hover {
    /* 动画 名称 时长 第三个属性是贝塞尔曲线 我们可以自定义动画的运动轨迹 让动画的运动轨迹有了很多种可能 第四个属性是当我们的动画完成是的状态 一般动画完成之后就回到了0%的状态 默认值是backwards 当我们给属性值是forwards的时候那么当动画到100%的时候就会停下来 不会再回到0% */
    animation: rotate 0.8s cubic-bezier(0.66, -0.47, 0.33, 1.5) forwards;
}

.back {
    width: 60vw;
    position: relative;
    /* 因为背面卡片要到后面去所以我们给背面卡片加一个沿Y轴旋转180度的属性 这里面我们可以看到是旋转了但是没有到后面 原因就是父盒子现在不是3D盒子 而是一个2D盒子 所以我们必须让父元素变成3D盒子 */
    transform: rotateY(180deg) translateX(90%) translateZ(1px);
    display: flex;
    flex-direction: row;
    align-items: center;
    opacity: 0;
    margin: 3%;
}

.leftItem {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgba(254, 145, 73, 0.869);
    border-radius: 20px;
    margin-left: 5%;
    margin-right: 5%;
    padding-top: 10%;
    padding-bottom: 10%;
}

.rightItem {
    width: 40vw;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
}

.players {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}

.player {
    font-weight: bold;
    line-height: 0;
    margin-left: 4px;
    margin-right: 4px;
}

.describe {
    width: 40vw;
    display: flex;
    flex-wrap: wrap;
}
.name{
    font-size: 1.1rem;
    font-weight: bold;
}
/*正面*/
.front {
    transform: translateZ(1px);
    transition: 1.2s;
    display: flex;
    flex-direction: row;
}

@keyframes rotate {
    0% {
        transform: rotateY(0);
    }

    100% {
        transform: rotateY(180deg);
    }
}

@keyframes rotate-reverse {
    0% {
        transform: rotateY(180deg);
    }

    100% {
        transform: rotateY(0);
    }
}

.img {
    margin-left: 2vw;
    margin-right: 2vw;
    width: 10vw;
}

.box2 {
    width: 40vw;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.medals {
    width: 40vw;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}

.oneMedal {
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-left: 2vw;
}

.pic {
    width: 7vw;
}

.eventName {
    font-size: 2rem;
    font-weight: bold;
    margin: 2%;
}

.detailed {
    width: 40vw;
    display: flex;
    justify-content: center;
    background-color: aliceblue;
    border-radius: 20px;
    margin: 5%;

}
</style>