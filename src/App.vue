<template>
  <div id="app">
    <subMenu></subMenu>
    <div class="main" id="main" :class="setPadding_b">
      <transition name="slide-left">
        <keep-alive>
          <router-view v-if="$route.meta.keepAlive"></router-view>
        </keep-alive>
      </transition>
      <transition name="slide-left">
        <router-view v-if="!$route.meta.keepAlive"></router-view>
      </transition>
    </div>
    <playBar></playBar>
    <gotoTop v-show="showTop"></gotoTop>
  </div>
</template>

<script>
  import subMenu from './components/subMenu.vue';  //菜单
  import gotoTop from './components/gotoTop.vue'; //回到顶部
  import playBar from './components/playBar.vue'; //播放条
  import {mapGetters} from 'vuex'
  export default {
      name: 'app',
      data(){
          return {
              showTop:false
          }
      },
      computed:{
          ...mapGetters({
              isDisplay:'GET_PLAYER_ISDISPLAY'
          }),
          setPadding_b(){
              return this.isDisplay?'padding-b':'no-padding-b';
          }
      },
      watch:{
          //路由切换时进行判断
          '$route'(to,from){
              if(to.name=='index'){
                  console.log(this.$route.meta.keepAlive)
              }
          }
      },
      methods:{
          needToTop(){
              let curHeight = document.documentElement.scrollTop || document.body.scrollTop;  //滚动高度
              let viewHeight = document.documentElement.clientHeight;
              if (curHeight > viewHeight + 500) {
                  this.showTop = true;
              }
              else {
                  this.showTop = false;
              }
          },

      },
      mounted(){
          window.addEventListener('scroll', this.needToTop);  //滚动事件监听
      },
      components:{subMenu,gotoTop,playBar}
  }
</script>

<style lang="scss">
  .padding-b{padding-bottom: 2.4rem;}
  //切换动画
  .slide-left-enter-active,.slide-left-leave-active{
    transition: transform .08s ease-in-out,opacity .1s ease-in;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    -moz-backface-visibility: hidden;
    -webkit-perspective: 1000;
    -moz-perspective: 1000;
    -ms-perspective: 1000;
    perspective: 1000;
  }

  .slide-left-enter, .slide-left-leave-active{
    transform: translate3d(-10%, 0, 0);
    -webkit-transform: translate3d(-10%, 0, 0);
    -moz-transform: translate3d(-10%, 0, 0);
    opacity: 0;
  }
</style>
