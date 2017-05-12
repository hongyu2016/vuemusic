<template>
  <!--顶部菜单-->
  <nav class="menu">
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
  .menu-text{display: block;width: 100%;background-color: #fff;border: 1px solid #e6e5e5;border-top-color: transparent;border-left-color: transparent}

</style>
