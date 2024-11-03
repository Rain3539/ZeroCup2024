<script setup>
import { ref, watch, onMounted } from "vue"
import { useRoute, useRouter } from "vue-router";
import { getCNData } from "../composables/ChineseData.js"
import floatintWater from "@/components/floatintWater.vue";
// const data = {
//     name: "乒乓球",
//     sorts: [{ eventname: "混合双打", player: ["孙颖莎", "王楚钦"], describe: "第34金", picture: ["../../public/source/img/fan.jpg","../../public/source/img/fan.jpg","../../public/source/img/fan.jpg"], comment: "继续荣耀的脚步，不忘心中的火种" },
//     { eventname: "男子团体", player: ["王楚钦", "马龙", "樊振东"], describe: "第34金", picture: ["../../public/source/img/fan.jpg","../../public/source/img/fan.jpg"], comment: "继续荣耀的脚步，不忘心中的火种" },
//     { eventname: "男子单打", player: ["王楚钦", "樊振东"], describe: "第34金", picture:[ "../../public/source/img/fan.jpg"], comment: "继续荣耀的脚步，不忘心中的火种" },
//     { eventname: "女子单打", player: ["孙颖莎", "陈梦"], describe: "第34金", picture: ["../../public/source/img/b739173e01584c944b84b9a20fa2a160.jpg"], comment: "继续荣耀的脚步，不忘心中的火种" }],
//     player: [{ name: "樊振东", alias: "小胖、肥仔东、暴力熊猫、“花季老将”", achievement: "中国乒乓球运动员、巴黎奥运会金牌得主、乒乓球大满贯得主", comments: "樊振东给人的感觉，特别像一架战斗机，有着最好的发动机、最先进的结构设计，但是各种先进的因素集中在一起，更需要慢慢磨合，形成合力。当他心无旁骛，克服一切干扰，集中所有力量加速度突破阻挡在他面前的音障之后，那片天空，就是属于他的未来。", img: "../../public/source/img/fan.jpg" },
//     { name: "樊振东", alias: "小胖、肥仔东、暴力熊猫、“花季老将”", achievement: "中国乒乓球运动员、巴黎奥运会金牌得主、乒乓球大满贯得主", comments: "樊振东给人的感觉，特别像一架战斗机，有着最好的发动机、最先进的结构设计，但是各种先进的因素集中在一起，更需要慢慢磨合，形成合力。当他心无旁骛，克服一切干扰，集中所有力量加速度突破阻挡在他面前的音障之后，那片天空，就是属于他的未来。", img: "../../public/source/img/fan.jpg" },
//     { name: "樊振东", alias: "小胖、肥仔东、暴力熊猫、“花季老将”", achievement: "中国乒乓球运动员、巴黎奥运会金牌得主、乒乓球大满贯得主", comments: "樊振东给人的感觉，特别像一架战斗机，有着最好的发动机、最先进的结构设计，但是各种先进的因素集中在一起，更需要慢慢磨合，形成合力。当他心无旁骛，克服一切干扰，集中所有力量加速度突破阻挡在他面前的音障之后，那片天空，就是属于他的未来。", img: "../../public/source/img/fan.jpg" },
//     { name: "樊振东", alias: "小胖、肥仔东、暴力熊猫、“花季老将”", achievement: "中国乒乓球运动员、巴黎奥运会金牌得主、乒乓球大满贯得主", comments: "樊振东给人的感觉，特别像一架战斗机，有着最好的发动机、最先进的结构设计，但是各种先进的因素集中在一起，更需要慢慢磨合，形成合力。当他心无旁骛，克服一切干扰，集中所有力量加速度突破阻挡在他面前的音障之后，那片天空，就是属于他的未来。", img: "../../public/source/img/fan.jpg" },
//     { name: "樊振东", alias: "小胖、肥仔东、暴力熊猫、“花季老将”", achievement: "中国乒乓球运动员、巴黎奥运会金牌得主、乒乓球大满贯得主", comments: "樊振东给人的感觉，特别像一架战斗机，有着最好的发动机、最先进的结构设计，但是各种先进的因素集中在一起，更需要慢慢磨合，形成合力。当他心无旁骛，克服一切干扰，集中所有力量加速度突破阻挡在他面前的音障之后，那片天空，就是属于他的未来。", img: "../../public/source/img/fan.jpg" },
//     { name: "陈梦", alias: "大梦", achievement: "中国乒乓球运动员、巴黎奥运会金牌获得者", comments: "陈梦球好，综合素质好、球的功底和架子好，有一种初生牛犊不怕虎的气势", img: "../../public/source/img/chen.jpg" }]
// }

const router = useRouter();
const route = useRoute();
let userId = route.query.id
let { getData } = getCNData
// console.log(userId)
const data = getCNData(userId)
function changeRoute() {
    router.push({ path: '/DetailedEvent/sorts' })
}
let chosenItem = ref()
onMounted(() => {
    chosenItem.value = "sorts"


    changeRoute()
})

//运动员板块和项目板块的切换

function changeColor(str) {
    if (str == "sorts" && chosenItem.value != "sorts") {
        chosenItem.value = "sorts"
    }
    if (str == "player" && chosenItem.value != "player") {
        chosenItem.value = "player"
    }
}
//滚轮向下滚动一定距离跳转至运动员界面
// window.addEventListener


</script>

<template>
    <div class="eventName">
        <div class="header">
            <router-link to="/">
                <img class="backButton" src="../../public/source/svg/back.svg">
            </router-link>
            <div class="titleBox">
                <div class="title">{{ data.name }}</div>
                <div class="line"></div>
                <div class="line"></div>
            </div>
            <div class="choice">
                <RouterLink to="/DetailedEvent/sorts" @click="changeColor('sorts')" id="choice1" class="choose"
                    :class="chosenItem == 'sorts' ? 'chosen' : ''">项目
                </RouterLink>
                <RouterLink to="/DetailedEvent/player" @click="changeColor('player')" id="choice2" class="choose"
                    :class="chosenItem == 'player' ? 'chosen' : ''">
                    运动员
                </RouterLink>
            </div>
        </div>
        <div class="show">
            <RouterView :chosenItem="chosenItem" :sortsData="data.sorts" :playerData="data.player" key="2"></RouterView>
            <!-- <floatintWater/>    -->
        </div>


    </div>
</template>

<style scoped>
.eventName {
    position: absolute;
    top: 0px;
    left: 0px;
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
}

::-webkit-scrollbar {
    width: 0;
}

.header {
    display: flex;
    flex-direction: row;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    justify-content: center;
    align-items: center;
    background-color: rgb(245, 155, 20);
    height: 10vh;
    width: 100vw;
    z-index: 10;
    transition: 0.5s;

}

.header .title {
    font-size: 2rem;
    color: aliceblue;
}

.backButton {
    position: fixed;
    left: 6vw;
    height: 8vh;
}

.titleBox {
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
}

.line {
    border: solid 1px white;
    width: 15vw;
    margin-top: 4%;
}

.line:nth-child(3) {
    transform: translateX(20%);
}

.line:nth-child(2) {
    transform: translateX(-20%);
}

.choice {
    position: fixed;
    right: 6vw;
    display: flex;
    flex-direction: row;
    color: aliceblue;
    font-size: 1.4rem;
}

.choose {
    padding: 5%;
    width: 10vw;
    background-color: #FFE100;
    text-decoration: none;
    color: white;
}

.choose:hover {
    background-color: #e34502;
}

#choice1 {
    border-bottom-left-radius: 15%;
    border-top-left-radius: 15%;

}

#choice2 {
    border-bottom-right-radius: 15%;
    border-top-right-radius: 15%;
}

.chosen {
    background-color: #D91313;
}

.show {
    position: relative;
    width: 100vw;
    height: 100vh;
    background: url("../../public/source/img/pingpongDesk.png");
    background-size: cover;
}
</style>