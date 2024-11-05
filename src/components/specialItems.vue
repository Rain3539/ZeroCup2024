<script setup>
import { ref } from "vue"
defineProps(["name", "medal"])
let showIcon = ref(true)
function changeshow() {
    showIcon.value = !showIcon.value
}
function clickItem(){
    
}
</script>
<template>
    <div class="box" @mouseenter="changeshow" @mouseleave="changeshow" @click="clickItem">
        <div class="eventName">{{ name }}</div>
        <div class="medals">
            
            <div class="oneMedal">
                <img src="../../public/source/svg/silverMedal.svg" class="pic">
                <p class="letter">{{medal[1]}}银</p>
            </div>
            <div class="oneMedal">
                <img src="../../public/source/svg/goldMedal.svg" class="pic">
                <p class="letter">{{medal[0]}}金</p>
            </div>
            <div class="oneMedal">
                <img src="../../public/source/svg/bronzeMedal.svg" class="pic">
                <p class="letter">{{medal[2]}}铜</p>
            </div>
        </div>
        <div class="detailsWord" v-show="showIcon">群星></div>
        <img class="detailsPic" v-show="!showIcon" src="../../public/source/img/fiveStar.svg">
    </div>
</template>


<style scoped>
.box {
    background-color: rgba(255, 255, 255, 0);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    height: 60vh;
    width: 27vw;
    border-radius: 30px;
}
.pic{
    width: 7vw;
}
.eventName{
    font-size: 2rem;
    font-weight: bold;
}
.medals{
    width: 20vw;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}
.oneMedal{
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.medals .oneMedal:nth-child(2){
    transform: translate(0,-20%);
}
.medals .oneMedal:nth-child(2){
    transform: translate(0,-20%);
}
.letter{
    font-size: 1.5rem;
    font-weight: bold;
    
}
.detailsWord{
    font-size: 1.5rem;
    font-weight: bold;
}
.detailsPic {
    position: relative;
    width: 8vw;
}
.box:hover {
    background-color: #D91313;

}
.box:hover .eventName,.box:hover .medals{
    color: #FFE100;
}
</style>