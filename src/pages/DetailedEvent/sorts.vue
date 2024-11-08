<script setup>
import sortsItem from "../../components/sortsItem.vue"
import { ref, onMounted } from "vue"
let data = defineProps(["chosenItem", "sortsData"])

// let chosenItem = ref("sorts")

let array = ref([])
let sorts
let currentItem = ref(0)
let len

onMounted(() => {
    if (data.chosenItem == "sorts") {
        array.value = [...document.querySelectorAll(".box")]
        // console.log(data.sortsData)
        sorts = document.querySelector(".sorts")
        len = array.value.length
        effect()
    }
    //轮播图
    
})
function effect() {
        // console.log(array.value[0].style)
        for (let i = 0; i < len; i++) {
            array.value[i].style.zIndex = i;
            array.value[i].style.transform = "scale(0.8)"
            array.value[i].style.left = "-100vw"
        }
        array.value[len - 3].style.left = "-54vw"
        array.value[len - 3].style.top = "5vh"
        array.value[len - 2].style.top = "0vh"
        array.value[len - 1].style.top = "5vh"
        array.value[len - 2].style.left = "10vw";
        array.value[len - 2].style.transform = "scale(1)"
        array.value[len - 2].style.zIndex = 100
        array.value[len - 1].style.left = "90vw"

    }
function nextItem() {
        // console.log(array.value[0])
        currentItem.value++
        let giveup = array.value[0]
        array.value.shift()
        array.value.push(giveup)
        // console.log(array[0])
        effect()
    }
    function preItem() {
        // console.log(array[0])
        currentItem.value--
        let giveup = array.value[len - 1]
        array.value.pop()
        array.value.unshift(giveup)
        // console.log(array[0])
        effect()
    }
</script>

<template>
    <div class="content1">
        <img class="arrow" @click="preItem" src="../../../public/source/svg/left.svg">
        <img class="arrow" @click="nextItem" src="../../../public/source/svg/right.svg">
        <ul class="sorts">
            <li class="sortsBox" v-for="item, index in data.sortsData" :key="item.eventname">
                <sortsItem :event="item" :index="index" class="box" />
            </li>
        </ul>

    </div>
</template>


<style scoped>
.content1 {
    position: relative;
    top: 20vh;
    height: 80vh;
    overflow: hidden;
    display: flex;
    flex-direction: row;
}

.arrow {
    position: absolute;
    top: 45%;
    transform: translateY(-50%);
    z-index: 5;
}

.content1 .arrow:nth-child(1) {
    left: 7%;
}

.content1 .arrow:nth-child(2) {
    right: 4%;
}

.box {
    position: absolute;
    transition-duration: 0.5s;
}

.sorts {
    position: relative;
    width: 100vw;
    height: 80vh;
    overflow-x: hidden;
    list-style: none;
}
</style>