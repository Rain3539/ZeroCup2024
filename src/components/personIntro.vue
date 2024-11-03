<script setup>
let data = defineProps(["person", "index"])
function grow() {
    let describe = document.getElementsByClassName("describe")[data.index];
    let name = document.getElementsByClassName("name")[data.index];
    let hoverAdd = document.getElementsByClassName("hoverAdd")[data.index];
    let pic = document.getElementsByClassName("pic")[data.index];
    if (data.index % 2 == 0) {
        describe.classList.add("leftDesGrow")
        name.classList.add("leftNameGrow")
        hoverAdd.classList.add("leftHoverGrow")
        pic.classList.add("leftPicGrow")
    }
    else{
        describe.classList.add("rightDesGrow")
        name.classList.add("rightNameGrow")
        hoverAdd.classList.add("rightHoverGrow")
        pic.classList.add("leftPicGrow")

    }

}
function reduce(){
    let describe = document.getElementsByClassName("describe")[data.index];
    let name = document.getElementsByClassName("name")[data.index];
    let hoverAdd = document.getElementsByClassName("hoverAdd")[data.index];
    let pic = document.getElementsByClassName("pic")[data.index];
    if (data.index % 2 == 0) {
        describe.classList.remove("leftDesGrow")
        name.classList.remove("leftNameGrow")
        hoverAdd.classList.remove("leftHoverGrow")
        pic.classList.remove("leftPicGrow")
    }
    else{
        describe.classList.remove("rightDesGrow")
        name.classList.remove("rightNameGrow")
        hoverAdd.classList.remove("rightHoverGrow")
        pic.classList.remove("leftPicGrow")

    }
}
</script>


<template>
    <div class="personIntro" :class="data.index % 2 == 0 ? 'leftColumn' : 'rightColumn'">
        <img class="pic" :src="data.person.img">
        <div class="describe" @mouseenter="grow" @mouseleave="reduce">
            <div class="name">{{ data.person.name }}</div>
            <div class="hoverAdd">
                <div class="alias">外号：{{ data.person.alias }}</div>
                <div class="achievement">个人荣誉：{{ data.person.achievement }}</div>
                <div class="comment">评价：{{ data.person.comments }}</div>
            </div>

        </div>
    </div>
</template>

<style scoped>
.personIntro {
    height: 100vh;
    scroll-snap-align: start;
}

.pic {
    position: absolute;
    z-index: 3;
    max-height: 60vh;
    width: 20vw;
    border-radius: 10%;
}

.describe {
    position: absolute;
    height: 60vh;
    width: 35vw;
    background-color: rgb(207, 207, 207);
    display: flex;
    flex-direction: row;
    opacity: 0.5;
    transform: translate(20%, 20%);
}

.describe .name {
    position: relative;
    font-size: 2.5rem;
}
.describe .hoverAdd{
    position: relative;
}


/**左侧常规样式**/
.leftColumn .pic {
    left: 8vw;
    margin-top: 8vh;
    rotate: -15deg;
}


.leftColumn .describe .name {
    transform: translate(25vw, 5vh);
    width: 2.2rem;
}
.leftColumn .describe .hoverAdd{
    left: 20vw;
    opacity: 0;
    width: 45%;
}
/**左侧悬浮样式**/
.leftColumn .leftPicGrow{
    transition: 0.8s;
    rotate: 0deg;
}

.leftColumn .leftDesGrow{
    width: 50vw;
    height: 70vh;
    opacity: 1;
    transition: 1s ease-in-out;
    z-index: 2;
}
.leftColumn .describe .leftNameGrow{
    font-size: 1.5rem;
    transform: translate(20vw,2vh);
    transition: 1s ease-in-out;
}
.leftColumn .describe .leftHoverGrow{
    transition: 0.5s;
    opacity: 1;
}

/**右侧常规样式**/
.rightColumn .pic {
    right: 8vw;
    margin-top: 32vh;
    rotate: 15deg;
}
.rightColumn .describe .name {
    position: relative;
    transform: translate(8vw, 4vh);
    width: 2.2rem;
}

.rightColumn .describe {
    right:8vw;
    transform: translateY(15%);
    margin-top: 15vh;
}
/**右侧悬浮样式**/
.rightColumn .describe .hoverAdd{
    position: relative;
    opacity: 0;
    width: 45%;
}
.rightColumn .rightDesGrow{
    width: 50vw;
    height: 70vh;
    opacity: 1;
    transition: 1s ease-in-out;
    z-index: 2;
}
.rightColumn .describe .rightNameGrow{
    font-size: 1.5rem;
    transform: translate(27vw,2vh);
    transition: 1s ease-in-out;
}
.rightColumn .describe .rightHoverGrow{
    transition: 0.5s;
    opacity: 1;
}
.rightColumn .leftPicGrow{
    transform: translate(10%,-20%);
    transition: 0.8s;
    rotate: 0deg;
}

</style>