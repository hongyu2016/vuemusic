import Vue from 'vue'
import Router from 'vue-router'
//懒加载组件
const index = resolve => require(['@/views/index.vue'], resolve);
const bangList = resolve => require(['@/views/bangList.vue'], resolve);
const searchList = resolve => require(['@/views/searchList.vue'], resolve);
const bangDetailList = resolve => require(['@/views/bangDetailList.vue'], resolve);
//import index from '@/views/index.vue'
//import bangList from '@/views/bangList.vue'
//import searchList from '@/views/searchList.vue'
//import bangDetailList from '@/views/bangDetailList.vue'
Vue.use(Router);

export default new Router({
    base:__dirname,
    linkActiveClass:'my-active',
    //mode: 'history',
    routes: [
        {
          path: '/index',
          name: 'index',
          component: index,
            meta:{keepAlive:true}
        },
        //榜单分类列表
        {
            path: '/bangList',
            name: 'bangList',
            component: bangList,
            meta: { keepAlive: true }
        },
        //榜单歌曲列表
        {
            path: '/bangList/topid/:topid',
            name: 'xDetailList',
            component: bangDetailList,
        },
        //搜索列表
        {
            path: '/searchList',
            name: 'searchList',
            component: searchList,
            meta: { keepAlive: true }
        },
        {
            path:'*',
            redirect:'/index',
            meta: { keepAlive: true }
        }
    ]
})
