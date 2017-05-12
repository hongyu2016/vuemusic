<template>
    <!--返回顶部-->
    <div id="play-bar" @click='' v-show="isDisplay">
        <div id="play-box">
            <div class="play-img-box">
                <img class="play-ing-pic" :src="playerInfo.singerPic"/>
            </div>
            <div class="center-box">
                <p class="sing-name">{{playerInfo.singName}}</p>
                <p class="sing-singer">{{playerInfo.singerName}}</p>
                <!--进度条-->
                <div id="small-progress" style="display: none"></div>
            </div>
            <div class="play-control">
                <div>
                    <span class="play-bar-icon" :class="getPlayBtnState" @click="playType"></span>
                    <span class="play-bar-icon icon-step-forward" @click="nextPlay"></span>
                </div>
            </div>
            <audio src="" id="audio"></audio>
        </div>
    </div>
</template>
<script>
    import tools from '../../static/js/playTools'
    import {mapGetters} from 'vuex'
    export default{
        name:'gotoTop',
        computed:{
            ...mapGetters({
                playerInfo:'GET_PLAYER_INFO', //面板信息
                isDisplay:'GET_PLAYER_ISDISPLAY', //是否显示
                isPlay:'GET_PLAYER_PLAYSTATE' //是否在播放
            }),
            getPlayBtnState(){
                return this.isPlay?'icon-pause':'icon-play';
            }
        },
        data(){
            return {

            }
        },
        methods:{
            playType (){
                tools.playState();
            },
            nextPlay (){
                tools.nextPlay();
            }
        },
        mounted(){
            tools.isEnded();
        }
    }
</script>
<style scoped lang="scss">
    @import '../assets/scss/mixin/mixin.scss';  /*引入scss混合宏*/
</style>