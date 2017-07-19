<template>
    <!--返回顶部-->
    <div id="goto-top" @click='goTop(6)'>
        up
    </div>
</template>
<script>
    export default{
        name:'gotoTop',
        methods:{
            goTop(rate){
                /*document.body.scrollTop=0;
                document.documentElement.scrollTop=0;*/
                let doc = document.body.scrollTop? document.body : document.documentElement;
                let scrollTop = doc.scrollTop;
                let top = function () {
                    scrollTop = scrollTop + (0 - scrollTop) / (rate || 2);
                    // 临界判断，终止动画
                    if (scrollTop < 1) {
                        doc.scrollTop = 0;
                        return;
                    }
                    doc.scrollTop = scrollTop;
                    // 动画执行!
                    requestAnimationFrame(top);
                };
                top();
            }
        }
    }
</script>
<style scoped>
    #goto-top{
        position: fixed;
        right: 10px;
        bottom: 2.3rem;
        z-index: 10;
        background-color: #cc8e06;
        border-radius: 50%;
        width: 1rem;
        height: 1rem;
        display: block;
        color: #fff;
        box-sizing: border-box;
        text-align: center;
        font-size: 0.5rem;
        line-height: 1rem;
    }
</style>