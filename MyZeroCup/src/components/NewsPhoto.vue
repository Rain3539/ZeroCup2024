<template>
    <div class="out">
        <div class="inner">
            <div class="img">
                <img ref="imageRef1" src="../images/NewsPhoto/1.png" alt="" title="点击播放视频"  @click="() => showvideo(0)">
                <video id="video" ref="videoRef1" src="../images/NewsPhoto/video1.mp4" controls></video>
            </div>
            <div class="img">
                <img ref="imageRef2" src="../images/NewsPhoto/2.png" alt="" title="点击播放视频" @click="() => showvideo(1)">
                <video id="video" ref="videoRef2" src="../images/NewsPhoto/video2.mp4" controls></video>
            </div>
            <div class="img">
                <img ref="imageRef3" src="../images/NewsPhoto/3.png" alt="" title="点击播放视频" @click="() => showvideo(2)">
                <video id="video" ref="videoRef3" src="../images/NewsPhoto/video3.mp4" controls></video>
                
            </div>
            <div class="img">
                <img ref="imageRef4" src="../images/NewsPhoto/4.png" alt="" title="点击播放视频" @click="() => showvideo(3)">
                <video id="video" ref="videoRef4" src="../images/NewsPhoto/video4.mp4" controls></video>
            </div>
            <div class="img">
                <img ref="imageRef5" src="../images/NewsPhoto/5.png" alt="" title="点击播放视频" @click="() => showvideo(4)">
                <video id="video" ref="videoRef5" src="../images/NewsPhoto/video5.mp4" controls></video>
            </div>
        </div>
        <div class="arrow arrow-left"><img src="../images/NewsPhoto/arrow-left.png" alt=""></div> <!-- 向左箭头 -->  
        <div class="arrow arrow-right"><img src="../images/NewsPhoto/arrow-right.png" alt=""></div> <!-- 向右箭头 -->  
        <div class="button">
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    name: "NewsPhoto"
}
</script>

<script setup lang="ts">
import { onMounted } from 'vue';
import { ref } from "vue";
const videoRef1 = ref<HTMLVideoElement | null>(null);
const imageRef1 = ref<HTMLImageElement | null>(null);
const videoRef2 = ref<HTMLVideoElement | null>(null);
const imageRef2 = ref<HTMLImageElement | null>(null);
const videoRef3 = ref<HTMLVideoElement | null>(null);
const imageRef3 = ref<HTMLImageElement | null>(null);
const videoRef4 = ref<HTMLVideoElement | null>(null);
const imageRef4 = ref<HTMLImageElement | null>(null);
const videoRef5 = ref<HTMLVideoElement | null>(null);
const imageRef5 = ref<HTMLImageElement | null>(null);
let isVideoPlaying = false;
const videoRefs = [videoRef1, videoRef2, videoRef3, videoRef4, videoRef5]!;
const imageRefs = [imageRef1, imageRef2, imageRef3, imageRef4, imageRef5]!;

function showvideo(videoIndex:number) {
    if (videoIndex >= 0 && videoIndex < videoRefs.length) {
        const videoRef = videoRefs[videoIndex];
        const imageRef = imageRefs[videoIndex];
        if (videoRef.value) {
            videoRef.value.style.display = 'block';
            videoRef.value.play();
            isVideoPlaying = true;
            videoRef.value.addEventListener('ended', () => {
                if (videoRef.value && imageRef.value) {
                    videoRef.value.style.display = 'none';
                    imageRef.value.style.display = 'block';
                    isVideoPlaying = false;
                }
            });
        }
        if (imageRef.value) {
            imageRef.value.style.display = 'none';
        }
    }
}
onMounted(() => {
    var img = document.querySelectorAll(".img");
    var left = document.querySelector(".arrow-left")!;
    var right = document.querySelector(".arrow-right")!;
    var buttons = document.querySelectorAll("p");

    //设置一个数组，用来存id
    var idArr = ["first", "second", "right", "left", "last"];

    //设置一个变量用来当图片的索引
    var index = 0;

    initialize();

    //设置一个定时器，让图片轮播
    var timer: number | null = setInterval(() => {
        if (!isVideoPlaying) { // 只有视频没播放时才切换图片
            next();
        }
    }, 3000);


    //给箭头绑定点击事件
    left.addEventListener("click", prev);
    //当鼠标放到箭头上时，让定时器停止
    left.addEventListener("mouseover", () => {
        clearInterval(timer!);
        timer = null;
    });
    //当鼠标离开箭头时，让定时器重新开始
    left.addEventListener("mouseout", () => {
        if (!isVideoPlaying) { // 只有视频没播放时才重新启动定时器
            timer = setInterval(() => {
                if (!isVideoPlaying) {
                    next();
                }
            }, 3000);
        }
    });

    right.addEventListener("click", next);
    right.addEventListener("mouseover", () => {
        clearInterval(timer!);
        timer = null;
    });
    right.addEventListener("mouseout", () => {
        if (!isVideoPlaying) {
            timer = setInterval(() => {
                if (!isVideoPlaying) {
                    next();
                }
            }, 3000);
        }
    });
    //当鼠标放到图片上时，让定时器停止
    for (let i = 0; i < 5; i++){
        img[i].addEventListener("mouseover", () => {
        clearInterval(timer!);
        timer = null;
    });
    }
    //当鼠标离开图片时，让定时器重新开始
    for (let i = 0; i < 5; i++){
        img[i].addEventListener("mouseout", () => {
        if (!isVideoPlaying) {
            timer = setInterval(() => {
                if (!isVideoPlaying) {
                    next();
                }
            }, 3000);
        }
    });
    }

    //给小方块添加点击事件
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("mousedown", () => {
        //在用户点击的时候关闭定时器
        clearInterval(timer!);
        timer = null;
        //这里需要判断用户点击的小方块与当前图片的索引之差，如果
        //大于0，则表明用户需要更换的是后面的图片，反之，表明用户
        //需要更换之前也就是前面的图片
        if (index > i) {
            let x = index - i;
            while (x--) {
            prev();
            }
        } else if (index < i) {
            let x = i - index;
            while (x--) {
            next();
            }
        }
        });
    } 

    //创建切换图片的函数
    function prev() {
        //切换上一张也就是让数组的最后一个元素变成第一个元素
        idArr.push(idArr.shift()!);
        initialize();
        if (index === 0) {
        index = buttons.length - 1;
        } else {
        index--;
        }
        clearColor();
        for (let i = 0; i < 5; i++) {
            const video = videoRefs[i].value;
            const image = imageRefs[i].value;
            if (video && image) {
                video.style!.display = 'none';
                video.pause();
                video.currentTime = 0;
                image.style!.display = 'block';
            }
        }
        isVideoPlaying = false;
    }
    function next() {
        //跟上面反过来
        idArr.unshift(idArr.pop()!);
        initialize();
        if (index === buttons.length - 1) {
        index = 0;
        } else {
        index++;
        }
        clearColor();
        for (let i = 0; i < 5; i++) {
            const video = videoRefs[i].value;
            const image = imageRefs[i].value;
            if (video && image) {
                video.style!.display = 'none';
                video.pause();
                video.currentTime = 0;
                image.style!.display = 'block';
            }
        }
        isVideoPlaying = false;
    }

    //创建一个函数用来让小方块跟随图片运动
    function clearColor() {
        for (let i = 0; i < buttons.length; i++) {
        buttons[i].style.backgroundColor = "silver";
        }
    //让当前的索引变色
        buttons[index].style.backgroundColor = "rgb(20, 134, 187)";
    }

    //创建一个函数用来初始化图片
    function initialize() {
        for (let i = 0; i < img.length; i++) {
        img[i].id = idArr[i];
        }
    }
});
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

.out {
    width: 100vw;
    height: 53.62vh;
    position: absolute;
    margin: 0 auto;
    top: 18.8%;
    .inner {
        width: 100%;
        height: 100%;
    .img {
        width: 40.56vw;
        height: 38.76vh;
        position: absolute;
        transition: 0.3s;
        left:17vw;
        img {
            width: 100%;
            height: 100%;
            cursor: pointer;
        };
        }
    }
    #video {
        display: none;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;

    }
    .arrow {  
        width: 2.8vw;  
        height: 5.17vh;  
        position: absolute;
        z-index: 9999;
        cursor: pointer;
        top: 24%;  
    }  

    .arrow-left {  
        left: 7vw;
    }  

    .arrow-right {  
        left: 83vw;
    }  

    .button {
        width: 12.24vw;
        height: 1.94vh;
        position: absolute;
        z-index: 9999;
        left: 45.2vw;
        top:47.8vh;
        p {
            width: 15px;
            height: 15px;
            float: left;
            margin: 0 5px;
            cursor: pointer;
            background-color: silver;
            &:first-child {
                background-color: rgb(20, 134, 187);
            }
        }
    }
    #last {
        transform: translateX(0);
        z-index: 9;
        opacity: 1;
    }
    #first {
        transform: translateX(200px) scale(1.3);
        z-index: 99;
        opacity: 1;
    }
    #second {
        transform: translateX(400px);
        z-index: 9;
        opacity: 1;
    }
    #left {
        transform: translateX(-100px);
        z-index: 1;
        opacity: 0;
    }
    #right {
        transform: translateX(500px);
        z-index: 1;
        opacity: 0;
    }
}
</style>