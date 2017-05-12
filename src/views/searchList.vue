<template>
  <!--搜索列表-->
  <div class="search-box container">
      <div class="search-head">
        <input type="text" placeholder="请输入歌曲或歌手" @keyup.enter="searchMusic" v-model.trim="searchTxt" class="search-input">
          <span class="icon-search search-btn" @click.stop="searchMusic"></span>
      </div>
      <div class="search-list">
          <ul v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="50">
              <template v-for="(item,index) in songList">
                  <li @click="playMuisc(index)" class="list">
                      <div class="flex-item flex-item-img">
                          <img v-lazy="item.albumpic_big" class="img-load">
                      </div>
                      <div class="flex-item flex-item-title">
                          <p class="songname">{{item.songname}}</p>
                          <p class="singername">by： -<span> {{item.singername}}</span></p>
                      </div>

                  </li>
              </template>
              <li v-show="noMore" style="text-align: center;padding: 5px 0;width: 100%;font-size: 14px">{{tip}}</li>

          </ul>
      </div>
  </div>
</template>

<script>
    import api from '../api/index'
    import tools from '../../static/js/playTools'

    import {mapActions} from 'vuex'
export default {
  name: 'searchList',
  data () {
    return {
        loading: false,
        searchTxt:'',
        songList:[],
        isPush:true,
        allPages:0,
        nowPages:1,
        noMore:false,
        tip:''
    }
  },
    computed:{

    },
    methods:{
        get(){
            //默认加载
            this.loading = true;
            const _this=this;
            this.nowPages = 1;
            this.allPages = 0;
            this.isPush = true;

            this.$http.get(api.search(this.searchTxt,this.nowPages)).then(function(res){
                if(res.data.showapi_res_code==0) {
                    _this.songList = res.data.showapi_res_body.pagebean.contentlist;
                    _this.allPages = res.data.showapi_res_body.pagebean.allPages;
                    _this.loading = false
                }
                else{
                    _this.tip=res.data.showapi_res_error;
                }
                if(res.data.showapi_res_body.pagebean.contentlist.length<=0){
                    _this.noMore=true;//没有更多内容了
                    _this.tip='没有更多内容了'
                }
            })
        },
        getLoadMore(){
            //滚动加载
           const _this=this;
           if(this.nowPages < this.allPages + 1){
               this.loading = true;
               this.noMore=false;
               this.nowPages++;
               this.$http.get(api.search(this.searchTxt,this.nowPages)).then(function(res){
                   if(res.data.showapi_res_code==0) {
                       _this.isPush = true;
                       //循环大数组
                       res.data.showapi_res_body.pagebean.contentlist.forEach((value) => {
                           _this.songList.push(value);
                       });
                       _this.loading = false;
                   }else{
                       _this.noMore=true;
                       _this.tip=res.data.showapi_res_error;
                       _this.loading = false;
                   }
                   if(res.data.showapi_res_body.pagebean.contentlist.length<=0){
                       _this.noMore=true;//没有更多内容了
                       _this.tip='没有更多内容了';
                       _this.loading = false;
                   }
               });
           }
           else{
               _this.noMore=true;//没有更多内容了
               _this.tip='没有更多内容了'
           }

        },
        searchMusic(){
            if (this.searchTxt.length==0){
                //搜索框不能为空
                return false;
            }else {
                this.get();
            }
        },
        loadMore(){
            this.getLoadMore();
        },
        //播放
        playMuisc (index) {
            if(this.isPush){
                this.setSongiList(this.songList);
                this.isPush = false;
            }
            tools.playMusic(index);
        },
        ...mapActions({
            setSongiList:'SONG_LIST_ACTION'
        })
    },
    created(){

    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    @import '../assets/scss/mixin/mixin.scss';  /*引入scss混合宏*/
  .search-box{padding: 0 0.3rem;position: relative;}
  .search-head{position: relative;margin-bottom: 0.5rem}
  .search-input{width: 85%;height: 1rem;padding: 0 0.1rem;border: 1px solid $gray}
  .search-btn{position: absolute;right:0;font-size: 0.8rem;margin-top: 0.1rem;color:  lighten($black,50%)}
</style>
