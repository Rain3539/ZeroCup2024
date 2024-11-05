<script setup>
import { ref, watch, onMounted } from "vue"
import { useRoute, useRouter } from "vue-router";
import { getCNData } from "../composables/ChineseData.js"


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
    //仍存在点击过快header不显示的小问题
    watch(chosenItem, (value) => {
        if (value == "sorts") {
            console.log("gsdfg")
            let header = document.getElementsByClassName("header")[0];
            header.style.opacity = 1;
        }
    })
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
        <div class="foggy"></div>
        <div class="show"
            :style="`background-image: url(${data.image});background-position: center;background-repeat: no-repeat;background-size: cover;`">
            <RouterView :chosenItem="chosenItem" :sortsData="data.sorts" :playerData="data.player" key="2"></RouterView>
            <floatintWater/>   
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
    background-color: rgb(255, 255, 255);
    height: 11vh;
    width: 100vw;
    z-index: 10;
    transition: 0.5s;

}

.header .title {
    font-size: 2.4rem;
    font-weight: bolder;
}

.backButton {
    position: fixed;
    left: 6vw;
    height: 8vh;
    top: 2vh;
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
    border: solid 1px;
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
    border-bottom-left-radius: 20px;
    border-top-left-radius: 20px;

}

#choice2 {
    border-bottom-right-radius: 20px;
    border-top-right-radius: 20px;
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

.foggy {
    width: 100vw;
    height: 100vh;
    background-color: #45454565;
    position: absolute;
    z-index: 2;
}
</style>