// 创建一个路由器，并暴露出去

// 第一步：引入createRouter
import { createRouter, createWebHistory } from 'vue-router'
// 引入一个一个可能要呈现组件
import Enter from '../pages/Enter.vue'
import HomePage from '../pages/HomePage.vue'
// 奥运详情页面
import Details from '../DetailsOfTheQlympic/Details.vue'
import Pingpong from '../DetailsOfTheQlympic/Detail-Pingpong.vue'
import Gymnastics from '../DetailsOfTheQlympic/Detail-Gymnastics.vue'
// 第二步：创建路由器
const router = createRouter({
    history: createWebHistory(), //路由器的工作模式（稍后讲解）
    routes: [ //一个一个的路由规则
        {
            path: '/', //默认路径
            component: Enter
        },
        {
            path: '/homepage',
            component: HomePage
        },
        //奥运详情页面
        {
            path:'/Details',
            component:Details
          },
          {
            path:'/Details/Pingpong',
            component:Pingpong
          },
          {
            path:'/Details/Gymnastics',
            component:Gymnastics
          },
    ]
})

// 暴露出去router
export default router
