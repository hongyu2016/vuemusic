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
    import tools from '../assets/js/playTools'
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
    //播放器
    #play-bar{position: fixed;right: 0;bottom: 0;z-index: 10;background-color: rgba(0,0,0,.75);
        padding: 5px;width: 100%;/*height: 60px;*/display: block;
        color: #fff;box-sizing: border-box;
    }
    #play-box{
        display: flex;
        justify-content: center;
        align-items: center;
        .play-img-box{
            box-sizing: border-box;
            flex: 1;
            img{
                display:block;
                width: 100%;
                border: solid 1px #9f9f9f;
                padding: 1px;
                box-sizing: border-box;
            }
        }
        .center-box{
            box-sizing: border-box;
            flex: 3;
            position: relative;
            padding: 0 5px;
            .sing-name{
                width: 100%;
                display: block;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                margin-top: 3px;
                margin-bottom: 5px;
                font-size: 0.5rem
            }
            .sing-singer{
                margin-top: 5px;
                color: #ccc;
                margin-bottom: 5px;
                font-size: 0.3rem
            }
            #small-progress{
                position: absolute;
                left: 5px;
                bottom: -5px;
                height: 0.1rem;
                background-color: deeppink;
            }
        }
        .play-control{
            box-sizing: border-box;
            display: flex;
            flex: 1;
            justify-content: center;
            .play-bar-icon{
                /*@include font-dpr(20px);*/
                line-height: 50px;
                font-size: 0.7rem;
            }
            .icon-play,.icon-pause{
                margin-right: 0.35rem;
            }
        }
    }
</style>