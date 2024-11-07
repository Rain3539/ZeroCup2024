<script setup name="ChineseProud">
import specialItems from "../components/specialItems.vue"
import commonItems from "../components/commonItems.vue"
import { ref } from "vue"
import { useRoute, useRouter } from "vue-router";
const eventList1 = [{ id: 0, name: "乒乓球", medal: [1, 2, 3] }, { id: 1, name: "游泳", medal: [1, 2, 3] }, { id: 2, name: "体操", medal: [1, 2, 3] }, { id: 3, name: "射击", medal: [1, 2, 3] }]
const eventList2 = [{ id: 0, name: "跳水", medal: [8, 2, 1], describe: "巴黎时间7月27日，昌雅妮和陈艺文率先在女子双人3米板决赛中拿下首金，赢得“开门红”，完成了从奥运“新生”到奥运冠军的蜕变；在男子双人10米台决赛中，杨昊、练俊杰重新夺回了东京奥运会遗失的阵地，强势夺冠；全红婵、陈芋汐这对“跳水双子星”双剑合璧，将女子双人10米台金牌稳稳收入囊中；龙道一、王宗源则在被动的情况下，不放弃，霸气地完成了反败为胜，以446.10分的总成绩将男子双人3米板冠军收入囊中。", player: ["全红婵","陈芋汐","陈艺文","昌雅妮","王宗源","谢思埸","龙道一","杨昊","曹缘","练俊杰"], pic: "../../public/source/svg/diving.svg" },
{ id: 1, name: "举重", medal: [5, 0, 0], describe: "本次举重队中国队参加了6项比赛，获得了5枚金牌，唯一失手的是在男子73公斤级的石智勇。第三次出战奥运会的30岁老将石智勇在举重男子73公斤级决赛中意外受伤无缘奖牌。但令人感动的是，赛后5位夺金的队员都将自己的金牌挂到了受伤的队友石智勇的胸前，让他成为了“本届金牌数最多的运动员”！", player: ["侯志慧","李发彬","罗诗芳","刘焕华","李雯雯","石智勇"], pic: "../../public/source/svg/weightlifting.svg" },
{ id: 2, name: "拳击", medal: [3, 2, 0], describe: "中国拳击队此次派出8名运动员参赛，经过15天的激烈角逐，常园、吴愉和李倩在女子54公斤级、女子50公斤级和女子75公斤级比赛中获得3枚金牌，杨文璐和杨柳分别在女子60公斤级和女子66公斤级中获得2枚银牌，创造了中国拳击队参加奥运会的历史最佳战绩。", player: ["常园","吴愉","李倩","杨文璐","杨柳"], pic: "../../public/source/svg/boxing.svg" },
{ id: 3, name: "摔跤", medal: [0, 1, 4], describe: "曹利国和孟令哲分别在男子古典式60公斤级和130公斤级项目上斩获银牌和铜牌，追平了中国古典跤在北京奥运会上创下的最好成绩。与北京奥运会奖牌集中在小重量级别不同，中国队在巴黎实现了大重量级别上的奖牌突破。中国队在女子自由式项目中斩获三枚铜牌，夺牌选手分别是庞倩玉、冯紫琪和洪可新。“不娇气，真性情”是李杉对女队员的整体评价。", player: ["曹利国","孟令哲","庞倩玉","冯紫琪","洪可新"], pic: "../../public/source/svg/wrestling.svg" }]
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
            <RouterLink to="/homepage"><img class="backButton" src="../../public/source/svg/back.svg"></RouterLink>
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