<script setup>
import personIntro from "../../components/personIntro.vue"
import bounceBall from "@/components/bounceBall.vue";
import {onMounted} from "vue"
let data = defineProps(["chosenItem", "playerData"])
let player
onMounted(() => {

    //鼠标移至顶部导航栏显示
    let header = document.querySelector(".header");
    header.addEventListener('mouseover', () => {
        if (data.chosenItem == "player") {
            header.style.opacity = 1
        }

    })
    header.addEventListener("mouseleave", () => {
        if (data.chosenItem == "player") {
            setTimeout(() => {
                header.style.opacity = 0
            }, 800)
        }

    })
    //滚轮上滚导航栏显示
    // window.addEventListener("scroll",()=>{

    //     if(chosenItem.value=="player"){
    //         console.log(scrollY)
    //     }
    // })
})

</script>

<template>
    <div class="content2">
        <div class="wholePage" v-for="item, index in playerData" :key="item.index">
            <personIntro :person="item" :index="index" class="player" />
        </div>
    </div>
    <!-- <bounceBall class="ball" v-if="data.playerData[0].name=='樊振东'"/> -->
</template>

<style scoped>
/**运动员**/
.content2 {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100vw;
    height: 100vh;
    scroll-snap-type: y mandatory;
    overflow-y: scroll;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    background-size: 100%, 100vh;
    background-repeat: no-repeat;
    background-position: center;
}
.ball{
    position: absolute;
    bottom: 2vh;
    right: 2vw;
    animation: goleft 0.6s linear infinite;
}
</style>