<script setup>
let data = defineProps(["person", "index"])
function grow() {
    let describe = document.getElementsByClassName("describe")[data.index];
    let name = document.getElementsByClassName("name")[data.index];
    let hoverAdd = document.getElementsByClassName("hoverAdd")[data.index];
    let pic = document.getElementsByClassName("pic")[data.index];
    let picBox = document.getElementsByClassName("picBox")[data.index];

    if (data.index % 2 == 0) {
        describe.classList.add("leftDesGrow")
        name.classList.add("leftNameGrow")
        hoverAdd.classList.add("leftHoverGrow")
        pic.classList.add("leftPicGrow")
        picBox.classList.add("pixBoxGrow")
    
    }
    else {
        describe.classList.add("rightDesGrow")
        name.classList.add("rightNameGrow")
        hoverAdd.classList.add("rightHoverGrow")
        pic.classList.add("rightPicGrow")
        picBox.classList.add("pixBoxGrow")

    }

}
function reduce() {
    let describe = document.getElementsByClassName("describe")[data.index];
    let name = document.getElementsByClassName("name")[data.index];
    let hoverAdd = document.getElementsByClassName("hoverAdd")[data.index];
    let pic = document.getElementsByClassName("pic")[data.index];
    let picBox = document.getElementsByClassName("picBox")[data.index];
    if (data.index % 2 == 0) {
        describe.classList.remove("leftDesGrow")
        name.classList.remove("leftNameGrow")
        hoverAdd.classList.remove("leftHoverGrow")
        pic.classList.remove("leftPicGrow")
        picBox.classList.remove("pixBoxGrow")
    }
    else {
        describe.classList.remove("rightDesGrow")
        name.classList.remove("rightNameGrow")
        hoverAdd.classList.remove("rightHoverGrow")
        pic.classList.remove("rightPicGrow")
        picBox.classList.remove("pixBoxGrow")

    }
}
</script>


<template>
    <div class="personIntro" :class="data.index % 2 == 0 ? 'leftColumn' : 'rightColumn'" @mouseenter="grow"
        @mouseleave="reduce">
        <div class="picBox">
            <img class="pic" :src="data.person.img">
            <div class="redTag">
                <p class="redCon">{{ data.person.alias }}</p>
                <img class="redBG" src="../../public/source/svg/redTag.svg">
            </div>
            <div class="yellowTag">
                <p class="yellowCon">{{ data.person.alias }}</p>
                <img class="yellowBG" src="../../public/source/svg/yellowTag.svg">
            </div>
        </div>
        <div class="describe">
            <div class="name">{{ data.person.name }}</div>
            <div class="hoverAdd">
                <div class="achievement">个人荣誉：{{ data.person.achievement }}</div><br>
                <div class="comment">评价：{{ data.person.comments }}</div>
            </div>

        </div>
    </div>
</template>

<style scoped>
.personIntro {
    height: 100vh;
    scroll-snap-align: start;
    z-index: 10;
}

.pic {
    position: absolute;
    z-index: 7;
    max-height: 65vh;
    width: 21vw;
    border-radius: 8px;
}

.describe {
    position: absolute;
    height: 62vh;
    width: 28vw;
    background-color: rgba(160, 160, 160, 0.5);
    display: flex;
    flex-direction: row;
    transform: translate(35%, 20%);
    z-index: 3;
    border-radius: 20px;
    color: rgb(255, 255, 255);
}

.describe .name {
    position: relative;
    font-size: 2.5rem;
    color: rgb(255, 255, 255);
}

.describe .hoverAdd {
    position: relative;
    font-size: 1.3rem;

}
.achievement{
    margin-top: 8%;
}

/**左侧常规样式**/
.leftColumn .pic {
    left: 8vw;
    margin-top: 8vh;
    rotate: -10deg;
}


.leftColumn .describe .name {
    transform: translate(22vw, 5vh);
    width: 2.2rem;
}

.leftColumn .describe .hoverAdd {
    left: 20vw;
    opacity: 0;
    width: 40%;
}
.leftColumn .redTag .redCon {
    position: absolute;
    z-index: 6;
    background-repeat: no-repeat;
    transform: translate(8vw, 60vh);
    rotate: -6deg;
    opacity: 0;
    color: white;
    font-weight: bold;
    font-size: 1.2rem;
}

.leftColumn .redTag .redBG {

    z-index: 5;
    position: absolute;
    transform: translate(1vw, 48vh) rotate(-85deg);
    width: 25vw;
    transition: 0.8s;
}

.leftColumn .yellowTag .yellowCon {
    position: absolute;
    z-index: 6;
    background-repeat: no-repeat;
    transform: translate(3vw, 72vh);
    rotate: -16deg;
    opacity: 0;
    color: white;
    font-weight: bold;
    font-size: 1.2rem;
}

.leftColumn .yellowTag .yellowBG {

    z-index: 5;
    position: absolute;
    transform: translate(5vw, 46vh) rotate(-80deg);
    width: 25vw;
    transition: 0.8s;
}
/**左侧悬浮样式**/
.leftColumn .leftPicGrow {
    transition: 0.8s;
    rotate: 0deg;
    width: 18vw;
    left: 10vw;
}

.leftColumn .leftDesGrow {
    width: 35vw;
    height: 65vh;
    background-color: #b7b7b7ae;
    transition: 1s ease-in-out;
    z-index: 2;
}

.leftColumn .describe .leftNameGrow {
    font-size: 1.5rem;
    font-weight: bold;
    transform: translate(17vw, 2vh);
    transition: 1s ease-in-out;
}

.leftColumn .describe .leftHoverGrow {
    transition: 0.5s;
    opacity: 1;
    transform: translateX(-16%);
}

/**右侧常规样式**/
.rightColumn .pic {
    right: 5vw;
    margin-top: 20vh;
    rotate: 10deg;
}

.rightColumn .describe .name {
    position: relative;
    transform: translate(4vw, 4vh);
    width: 2.2rem;
}

.rightColumn .describe {
    right: 8vw;
    transform: translateY(15%);
    margin-top: 15vh;
}
.rightColumn .redTag .redCon {
    position: absolute;
    z-index: 6;
    background-repeat: no-repeat;
    transform: translate(31vw, 67vh);
    rotate: 3deg;
    opacity: 0;
    color: white;
    font-weight: bold;
    font-size: 1.2rem;
}

.rightColumn .redTag .redBG {

    z-index: 5;
    position: absolute;
    transform: translate(25vw, 62vh) rotate(-85deg);
    width: 25vw;
    transition: 0.8s;
}

.rightColumn .yellowTag .yellowCon {
    position: absolute;
    z-index: 6;
    background-repeat: no-repeat;
    transform: translate(39vw, 62vh);
    rotate: 14deg;
    opacity: 0;
    color: white;
    font-weight: bold;
    font-size: 1.2rem;
}

.rightColumn .yellowTag .yellowBG {

    z-index: 5;
    position: absolute;
    transform: translate(21vw, 58vh) rotate(-80deg);
    width: 25vw;
    transition: 0.8s;
}
/**右侧悬浮样式**/
.rightColumn .describe .hoverAdd {
    position: relative;
    opacity: 0;
    width: 35%;

}

.rightColumn .rightDesGrow {
    width: 35vw;
    height: 65vh;
    background-color: #b7b7b7ae;
    transition: 1s ease-in-out;
    z-index: 2;
}

.rightColumn .describe .rightNameGrow {
    font-size: 1.5rem;
    transform: translate(16vw, 2vh);
    transition: 1s ease-in-out;
    font-weight: bold;
}

.rightColumn .describe .rightHoverGrow {
    transition: 0.5s;
    opacity: 1;
}

.rightColumn .rightPicGrow {
    transition: 0.8s;
    rotate: 0deg;
    width: 18vw;
}

/*tag悬浮样式*/
.leftColumn .pixBoxGrow .redTag .redCon {
    opacity: 1;
    transition: 0.8s;
}

.leftColumn .pixBoxGrow .redTag .redBG {

    z-index: 5;
    position: absolute;
    transform: translate(5vw, 52vh);
    width: 25vw;
    transition: 0.8s;
}

.leftColumn .pixBoxGrow .yellowTag .yellowCon {
    opacity: 1;
    transition: 0.8s;
}
.leftColumn .pixBoxGrow .yellowTag .yellowBG {

    z-index: 5;
    position: absolute;
    transform: translate(4vw, 59vh);
    width: 25vw;
    transition: 0.8s;
}
.rightColumn .pixBoxGrow .redTag .redCon {
    opacity: 1;
    transition: 0.8s;
}

.rightColumn .pixBoxGrow .redTag .redBG {

    z-index: 5;
    position: absolute;
    transform: translate(24vw, 65vh) rotate(-170deg);
    width: 25vw;
    transition: 0.8s;
}

.rightColumn .pixBoxGrow .yellowTag .yellowCon {
    opacity: 1;
    transition: 0.8s;
}
.rightColumn .pixBoxGrow .yellowTag .yellowBG {

    z-index: 5;
    position: absolute;
    transform: translate(25vw, 72vh) rotate(-148deg);
    width: 25vw;
    transition: 0.8s;
}
</style>