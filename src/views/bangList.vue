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

export default {
  name: 'bangList',
  data () {
      const xiamiBang=[
          {topid:3,title:'欧美',img:'/static/images/oumei.jpg'},
          {topid:5,title:'内地',img:'/static/images/neidi.jpg'},
          {topid:6,title:'港台',img:'/static/images/gangtai.jpg'},
          {topid:16,title:'韩国',img:'/static/images/hanguo.jpg'},

          {topid:17,title:'日本',img:'/static/images/riben.jpg'},
          {topid:18,title:'民谣',img:'/static/images/minyao.jpg'},
          {topid:19,title:'摇滚',img:'/static/images/yaogun.jpg'},
          {topid:23,title:'销量榜',img:'/static/images/xiaoliang.jpg'},
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
