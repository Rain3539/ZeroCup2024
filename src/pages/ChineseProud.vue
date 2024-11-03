<script setup name="ChineseProud">
import specialItems from "../components/specialItems.vue"
import commonItems from "../components/commonItems.vue"
import { ref } from "vue"
import { useRoute, useRouter } from "vue-router";
const eventList1 = [{ id: 0, name: "乒乓球", medal: [1, 2, 3] }, { id: 1, name: "艺术体操", medal: [1, 2, 3] }, { id: 2, name: "跳水", medal: [1, 2, 3] }, { id: 3, name: "乒乓球", medal: [1, 2, 3] }]
const eventList2 = [{ id: 0, name: "跳水", medal: [1, 1, 1], describe: "dddddsA阿凡达安抚啊愤愤然官方v的撒啊肥肉手机发违法阿瑞斯广发佛IP给二公分儿国但是如果var发过去阿尔山嘎嘎仍然大唐官府v阿飞噶芬达味d", player: ["全红婵", "addd", "ddfff"], pic: "../../public/source/svg/swimming.svg" },
{ id: 1, name: "跳水", medal: [1, 1, 1], describe: "dddddddd发而无法发而无法成都发起热发电各色人告诉他发给dddddd擦拭的发生多次v饿啊日发饿啊分电视大赛擦二二非常撒地方从委屈啊范德萨v不发威辐射热地方从", player: ["全红婵", "addd", "ddfff","sdfadfa","sadfdgfd","dgfshsr"], pic: "../../public/source/svg/swimming.svg" },
{ id: 2, name: "跳水", medal: [1, 1, 1], describe: "dddddddddddddddddddd", player: ["全红婵", "addd", "ddfff"], pic: "../../public/source/svg/swimming.svg" },
{ id: 3, name: "跳水", medal: [1, 1, 1], describe: "dddddddddddddddddddd", player: ["全红婵", "addd", "ddfff"], pic: "../../public/source/svg/swimming.svg" },
{ id: 4, name: "跳水", medal: [1, 1, 1], describe: "dddddddddddddddddddd", player: ["全红婵", "addd", "ddfff"], pic: "../../public/source/svg/swimming.svg" }]
const router = useRouter();
const route = useRoute()
function changeRoute(index) {
    // console.log(index)
    router.push({ path: '/detailedEvent', query: { id: index } })
}

</script>

<template>
    <div class="chineseProud">
        <!-- <img src="../../public/source/img/chinsesProudBG.png" class="background"> -->
        <header class="header">
            <img class="backButton" src="../../public/source/svg/back.svg">
            <div class="titleBox">
                <div class="title">中国骄傲</div>
                <div class="line"></div>
                <div class="line"></div>
            </div>
        </header>
        <section class="specialContent card-list">
            <div class="content1 card" v-for="events in eventList1" :key="events.id" @click="changeRoute(events.id)">
                <specialItems :name="events.name" :medal="events.medal" />
            </div>
        </section>
        <section class="commonContent">
            <div class="content2" v-for="events in eventList2" :key="events.id">
                <commonItems :event="events" />
            </div>
        </section>



    </div>
</template>

<style scoped>
.chineseProud {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    overflow-x: hidden;
    background: url("../../public/source/img/chinsesProudBG.png");
    background-size: cover;
}


.header {
    z-index: 2;
    position: relative;
    display: flex;
    flex-direction: row;
}

.backButton {
    position: relative;
    top: 0;
    height: 10vh;
    margin: 3%;
}

.titleBox {
    top: 3vh;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
}

.title {
    font-size: 2rem;
    color: aliceblue;
}

.line {
    border: solid 2px white;
    width: 15vw;
    margin-top: 5%;
}

.line:nth-child(3) {
    transform: translateX(20%);
}

.line:nth-child(2) {
    transform: translateX(-20%);
}



.content1 {
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.specialContent {
    width: 100vw;
    display: flex;
    flex-direction: row;
    justify-content: center;
}

.card-list {
    position: relative;
    top: 3vh;
    left: 1vw;
    display: flex;
}

.card-list::-webkit-scrollbar {
    height: 0;
}

.card {
    height: 60vh;
    width: 27vw;
    border-radius: 30px;
    background-image: linear-gradient(135deg, rgb(255, 255, 255), rgb(204, 60, 3));
    box-shadow: 1rem 0 3rem #000;
    display: flex;
    flex-direction: column;
    transition: 0.3s;
    margin: 0;
    scroll-snap-align: start;
    clear: both;
    position: relative;
}

.card:focus-within~.card,
.card:hover~.card {
    transform: translateX(8vw);
}

.card:hover {
    transform: translateY(-1rem) rotate(5deg);
}

.card:not(first-child) {
    margin-left: -8vw;
}

/*简单项目样式*/
.commonContent{
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    top: 8vh;
}
.content2{
    position: relative;
    margin-top: 3vh;
    margin-bottom: 3vh;
    border-radius: 30px;
    display: flex;
    flex-direction: row;
    align-items: center;
}
.content2:nth-child(2n) {
    transform: translateX(8vw);
}
.content2:nth-child(2n+1) {
    transform: translateX(-8vw);
}
</style>