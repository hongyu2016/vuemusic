<template>
  <!--顶部菜单-->
  <nav class="menu">
    <div id="tip">
      <p>说明：本网站非商业盈利网站，所有歌曲数据来自 <a href="https://www.showapi.com/">showAPI</a></p>
    </div>
    <div class="sub-menu animated slideInDown">
      <router-link :to="{name:'index'}" tag="div" class="menu-list sub-menu-link">
        <button type="button" class="menu-text">推荐</button>
      </router-link>

      <router-link :to="{name:'bangList'}" tag="div" class="menu-list sub-menu-link">
        <button type="button" class="menu-text">热门榜单</button>
      </router-link>

      <router-link :to="{name:'searchList'}" tag="div" class="menu-list sub-menu-link">
        <button type="button" class="menu-text" style="border-right-color: transparent">搜索</button>
      </router-link>

    </div>
  </nav>

</template>

<script>
export default {
  name: 'subMenu',
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import '../assets/scss/mixin/mixin.scss';  /*引入scss混合宏*/
  //导航菜单
  .menu{
    width: 100%;
    position: fixed;
    top:0;
    left:0;
    margin-bottom: 0;
    z-index: 10;
    //当前项
    .my-active {
      color: $red;
      .menu-text{
        color: $red;
      }
    }
    .sub-menu{
      display: flex;
      background-color: #eaeaea;
      height: 1.5rem;
      line-height: 1.5rem;
      justify-content: center;
      align-items: center;
      .sub-menu-link{
        width: 100%;
        -webkit-box-flex: 1;
        -moz-box-flex: 1;
        text-align: center;
        .menu-text{
          height: 1.5rem;
          line-height: 1.5rem;
          font-size: 16px;
        }
      }
    }
  }
  .menu-text{display: block;width: 100%;background-color: #fff;border: 1px solid #e6e5e5;border-top-color: transparent;border-left-color: transparent}

  #tip{padding: 0.2rem;background-color: #fff;border-bottom: solid 1px $gray;}
  #tip>p{font-size: 10px;white-space: nowrap;}
  #tip>p>a{color: red}
</style>
