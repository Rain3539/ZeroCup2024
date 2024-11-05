<script setup>
import { onMounted } from 'vue';

const data = defineProps(['event', 'index'])
onMounted(() => {
    let picture = document.querySelectorAll(`.pic${data.index}`)
    // console.log(picture.length)
    if (picture.length != 1) {
        for (let i = 0; i < data.event.picture.length; i++) {
            picture[i].addEventListener("mouseover", () => {
                // console.log("ss")
                for (let j = 0; j < picture.length; j++) {
                    picture[j].className = "pics"
                }
                picture[i].className = "pics active"
            })
        }
    }
    else {
        picture[0].className = "pics active one"
    }

})
</script>

<template>
    <div class="box">
        <div class="mainContent">
            <section class="picBox">
                <div class="pics" :class="'pic' + data.index" v-for="item in data.event.picture" :key="item.index"
                    :style="'background-image: url(' + item + ')'">
                </div>
            </section>

            <img class="icon" src="../../public/source/img/pingpong.svg" />
            <div class="background">
                <div class="describe">
                    <div class="title">{{ data.event.eventname }}</div>
                    <div class="playerBox">
                        <span v-for="item in data.event.player" :key="item.index">
                            <span class="playerName">{{ item }}</span>
                        </span>
                    </div>

                    <div class="achieve">{{ data.event.describe }}</div>
                    <div class="comment">{{ data.event.comment }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.mainContent {
    height: 70vh;
    width: 70vw;
    margin-left: 5vw;
    margin-right: 5vw;
    position: absolute;
}

.picBox {
    position: absolute;
    left: 2vw;
    display: flex;
    width: 30vw;
}

.pics {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 10px;
    flex: 0.5;
    top: 0px;
    height: 60vh;
    min-width: 5vw;
    position: relative;
    z-index: 10;
    box-shadow: 2px 2px 20px rgb(59, 59, 59);
    transition: flex 0.7s cubic-bezier(0.05, 0.6, 0.4, 0.9);
    margin: 6px;
}

.pics.active {
    flex: 4;
}
.pics.one{
    height: 66vh;
    max-width: 25vw;
    left: 15%;
    background-size: cover;

}

.icon {
    top: 0px;
    right: 0px;
    width: 15vw;
    position: absolute;
    z-index: 10;
}

.background {
    position: absolute;
    background-color: rgba(255, 255, 255, 0.5);
    width: 65vw;
    top: 20%;
    height: 50vh;
    border-radius: 39px;
    overflow: hidden;
    left: 5vw;
    box-shadow: 2px 3px 10px rgb(42, 42, 42);
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.describe {
    height: 100%;
    width: 50%;
    padding-top: 6%;
    transform: translateX(85%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
}

.describe .title {
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 4%;
    color: white;
}

.describe .playerName {
    font-size: 2.2rem;
    font-weight: bold;
    color: #FFEE00;
}

.describe .playerBox {
    width: 20vw;
    display: flex;
    justify-content: space-around;
}
.describe .achieve{
    font-size: 1.9rem;
    color: white;


}

</style>