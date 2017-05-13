<template>
  <!--榜单分类列表-->
  <div class="container">
      <ul>
        <router-link v-for="(titleText,index) in titleTexts" :to="{name:'xDetailList',params:{type:1,topid:titleText.topid}}" tag="li" class="list">
          <div class="flex-item flex-item-img">
            <img :src="titleText.img">
          </div>
          <div class="flex-item flex-item-title">
              <p>{{titleText.title}}</p>
          </div>
          <div class="flex-item flex-item-icon">
            <span class="right-icon icon-angle-right"></span>
          </div>

        </router-link>
      </ul>
  </div>
</template>

<script>
    import oumei from '../assets/images/oumei.jpg'
    import liuxing from '../assets/images/neidi.jpg'
    import neidi from '../assets/images/neidi.jpg'
    import gangtai from '../assets/images/gangtai.jpg'
    import hanguo from '../assets/images/hanguo.jpg'
    import riben from '../assets/images/riben.jpg'
    import minyao from '../assets/images/minyao.jpg'
    import yaogun from '../assets/images/yaogun.jpg'
    import rege from '../assets/images/yaogun.jpg'
    import xinge from '../assets/images/yaogun.jpg'
    import wangluo from '../assets/images/yaogun.jpg'
    import yinyueren from '../assets/images/yaogun.jpg'
    import kge from '../assets/images/xiaoliang.jpg'
    import xiaoliang from '../assets/images/xiaoliang.jpg'
export default {
  name: 'bangList',
  data () {
      const xiamiBang=[
          {topid:3,title:'欧美',img:oumei},
          {topid:4,title:'流行榜',img:liuxing},
          {topid:5,title:'内地',img:neidi},
          {topid:6,title:'港台',img:gangtai},
          {topid:16,title:'韩国',img:hanguo},

          {topid:17,title:'日本',img:riben},
          {topid:18,title:'民谣',img:minyao},
          {topid:19,title:'摇滚',img:yaogun},
          {topid:26,title:'热歌',img:rege},
          {topid:27,title:'新歌',img:xinge},
          {topid:28,title:'网络歌曲',img:wangluo},
          {topid:32,title:'音乐人',img:yinyueren},
          {topid:28,title:'K歌金曲',img:kge},
          {topid:23,title:'销量榜',img:xiaoliang},
      ];

    return {
        xiamiBang:xiamiBang,
        titleTexts:[]
    }
  },
    watch:{
      //路由切换时进行判断
      '$route'(to,from){
          if(to.name=='bangList'){
              this.titleTexts=this.xiamiBang;
          }
      }
    },
    mounted(){
      //页面初始化判断路由
      if(this.$route.name=='bangList'){
          this.titleTexts=this.xiamiBang;
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  @import '../assets/scss/mixin/mixin.scss';  /*引入scss混合宏*/
  a:active,a:focus{text-decoration: none}
   /*.right-icon{position: absolute;right:16px;font-size: 20px;top: 14px}*/
  .list{
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.1rem 0.2rem;
    font-size: 14px;
    border-bottom: 1px solid $gray;
  }
  .list:last-child{
    border-bottom-color: transparent;
  }

  .flex-item-img{
    flex: 1;
    img{
      width: 100%;
      border: 1px solid #eaeaea;
      box-sizing: border-box;
    }
  }
  .flex-item-title{
    flex: 3;
    padding: 0 0.4rem;
  }
  .flex-item-icon{
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 0.5;
    font-size: 18px;
  }
</style>
