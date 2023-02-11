import { createRouter, RouteRecordRaw, createWebHashHistory } from 'vue-router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
export const routes : Array <RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    redirect:'/home',
  },
  {
    path: '/home',
    name: 'Home',
    meta:{
      keepAlive:true,
    },
    component:()=>import('../components/Layout.vue'),
    redirect:'/home/rank',
    children:[
      {
        path:'/home/rank',
        name:'Rank',
        meta:{
          keepAlive:true,
        },
        component:()=> import('../views/home/index.vue'),
      },
      {
        path:'/home/my',
        name:'MyMusic',
        meta:{
          keepAlive:true,
        },
        component:()=> import('../views/mine/index.vue'),
      }
    ]
  },
  {
    path: '/playing',
    name: 'Playing',
    component:()=>import('../views/playing/index.vue'),
  }
];


const router = createRouter({
  history: createWebHashHistory(), //哈希值模式
  routes
});

router.beforeEach((to, from, next) => {
  NProgress.start(); // 进度条开始
  next();
});

router.afterEach(() => {
  NProgress.done(); // 进度条结束
});

// 暴露出去
export default router;