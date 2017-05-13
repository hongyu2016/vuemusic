<template>
  <!--首页-->
  <div class="gridlist-container container">
      <loading v-show="loading"></loading><!--loading-->
        <ul class="gridlist">
            <li v-for="(item,index) in songList" class="gridlist-item">
                <img  @click="playMuisc(index)" v-lazy="item.albumpic_big" class="img-load"/>
                <div class="masking">
                    <p @click="playMuisc(index)" class="title">{{item.songname}}</p>
                    <p @click="playMuisc(index)" class="sub-title">
                        by： <b>{{item.singername}}</b>
                    </p>
                </div>

            </li>
        </ul>
  </div>
</template>

<script>
    import api from '../api/index'
    import loading from '../components/loading.vue'
    import tools from '../assets/js/playTools'
    import {mapActions} from 'vuex'
export default {
  name: 'index',
  data () {
      return {
          isPush:true,
          songList:[],
          loading: false,
          //refreshing: false,
          //trigger: null  //触发下拉刷新的元素, 会给它绑定上事件
      }
  },
    created () {
        this.get()
    },
    mounted () {

    },
    activated(){
        //this.trigger = this.$el  //触发下拉刷新的元素, 会给它绑定上事件
    },
    methods: {
        get(){
            this.loading = true
            const _this=this;

            this.$http.get(api.getPlayListByWhere(26,0)).then(function(res){
                if(res.data.showapi_res_code==0) {
                    _this.songList = res.data.showapi_res_body.pagebean.songlist;
                    _this.loading = false
                }
            })
        },
        playMuisc (index) {
            if(this.isPush){
                this.setSongiList(this.songList);
                this.isPush = false;
            }
            tools.playMusic(index);
        },
        //下拉刷新--体验不好-卡 滑动的时机也不对 先去掉此功能
       /* refresh(){
            this.refreshing = true
            //this.loading = true
            const _this=this;

            this.$http.get(api.getPlayListByWhere(26,0)).then(function(res){
                _this.songList= res.data.showapi_res_body.pagebean.songlist;
                //_this.loading = false
                _this.refreshing = false
            })
        },*/
        ...mapActions({
            setSongiList:'SONG_LIST_ACTION'
        })
    },
    components:{loading}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    @import '../assets/scss/mixin/mixin.scss';/*引入scss混合宏*/
  .gridlist-container{
      margin-top: 1.8rem;
  }
    .gridlist{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        width: 100%;
        overflow-y: auto;
        align-content: flex-start; /*换行后 垂直排列方式*/
        .gridlist-item{
            width: 48%;
            margin-bottom:0.2rem;
            position:relative;
            img{
                width: 100%;
                display: block;
            }
        }
    }

  .gridlist-item{
    $left:0.2rem;
    .title{
        font-size: 16px;
        margin:{
            top:0.1rem;
            bottom:0.1rem;
        }
        color:$white;
    }
    .sub-title{
        color:$white;
    }
    .masking{
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        padding: 0.1rem;
        background-color: rgba($black,0.4);
        box-sizing: border-box;
    }

  }
    .mu-grid-tile>img{
        /*height: auto;
        width: 100%;*/
    }
    .img-load[lazy=loaded] {
        background-size: cover;
        -webkit-animation:fadeIn 0.5s both;
        -moz-animation:fadeIn 0.5s both;
        -o-animation:fadeIn 0.5s both;
        animation:fadeIn 0.5s both;
        -ms-animation:fadeIn 0.5s both;

    }
    @-webkit-keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
    @-moz-keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
    @-ms-keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
    @-o-keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
</style>
