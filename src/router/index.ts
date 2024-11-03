import { createRouter, createWebHistory } from 'vue-router'
import ChineseProud from "@/pages/ChineseProud.vue";
import detailedEvent from "@/pages/detailedEvent.vue";
import sorts from "@/pages/DetailedEvent/sorts.vue";
import player from "@/pages/DetailedEvent/player.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      component:ChineseProud
  },
  {
      path:'/detailedEvent',
      component:detailedEvent,
      children:[
          {
          path:'/DetailedEvent/sorts',
          component:sorts
      },
      {
          path:'/DetailedEvent/player',
          component:player
      }
      ]
  },
  ]
})

export default router
