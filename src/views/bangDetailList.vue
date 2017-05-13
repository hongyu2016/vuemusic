<template>
  <!--榜单详情列表-->
  <div class="container">
    <loading v-show="loading"></loading><!--loading-->
    <ul>
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
    </ul>
  </div>

</template>

<script>
  import api from '../api/index'
  import tools from '../assets/js/playTools'
  import {mapActions} from 'vuex'
  import loading from '../components/loading.vue'
export default {
  name: 'hello',
  data () {
      return {
          isPush:true,
          songList:[],
          loading: false,
      }
  },
    created () {
        this.get()
    },
    methods: {
        get(){
            let _this=this;
            this.loading = true
            this.$http.get(api.getPlayListByWhere(this.$route.params.topid,0)).then((res) => {
                if(res.data.showapi_res_code==0){
                    _this.songList= res.data.showapi_res_body.pagebean.songlist;
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
        ...mapActions({
            setSongiList:'SONG_LIST_ACTION'
        })
    },
    components:{loading}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  .songname{font-size: 16px;margin-bottom: 0.1rem;color: deeppink}
</style>
