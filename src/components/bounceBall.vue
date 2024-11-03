<template>
    
    <div class="ball-box">
        <div class="ball">
        </div>
    </div>
    <div class="shadow"></div>

</template>
<style scoped>

.ball-box{
    position: absolute;
    left: 2vw;
    width: 5vw;
    height: 5vw;
    /* 执行动画：动画名 时长 减速 先反向再正向 无限次播放 */
    animation: bounce 0.6s ease-out alternate-reverse infinite;
}
.ball{
    width: 5vw;
    height: 5vw;
    border-radius: 50%;
    background-color: #f7972b;
    /* 溢出隐藏 */
    overflow: hidden;
    /* 绝对定位 */
    position: relative;
    z-index: 1;
    /* 执行动画：动画名 时长 线性 无限次播放 */
    animation: roll 3s linear infinite;
    box-shadow: 1px 1px 8px;
}

.shadow{
    width: 5vw;
    height: 5px;
    border-radius: 50%;
    background-color: rgba(0,0,0,0.4);
    position: absolute;
    
    z-index: 1;
    bottom: 2vh;
    left: 2vw;
    animation: shadow 0.6s ease-out alternate infinite;
}

/* 定义动画 */
/* 篮球弹跳的动画 */
@keyframes bounce {
    0%{
        transform: translateY(90vh);
    }
    100%{
        transform: translateY(70vh);
    }
}
/* 篮球旋转的动画 */
@keyframes roll {
    0%{
        transform: rotate(0deg);
    }
    100%{
        transform: rotate(360deg);
    }
}
/* 阴影的动画 */
@keyframes shadow {
    0%{
        transform: scale(0.15,1.25);
    }
    100%{
        transform: scale(1.25,0.75);
    }
}

</style>
