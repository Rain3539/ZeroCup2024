<template>
    <div class="app">
        <RouterView></RouterView> <!-- 使路由可以渲染的部分 -->  
    </div>
</template>

<script lang="ts">
export default {
    name: "App",
}
</script>

<style>
body {
    margin: 0;
    width: 100vw;
     height:100%;
    overflow-x: hidden;
}
.app {
    height:100%;
}
</style>