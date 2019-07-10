<style lang="scss" scoped>
/*中间页面宽度设置百分比*/
 .main-content-app{
    width: 100%;
    left: 0px;
    height: 100%;
}
</style>

<template>
  <section class="main-content-app">
  	
    <transition name="fade-transform" mode="out-in">
      <keep-alive :include="cachedViews">
        <router-view :key="key"/>
      </keep-alive>
    </transition>
  </section>
</template>

<script>

export default {
  name: 'AppMain',
  computed: {
    cachedViews() {
     return this.$store.state.$tagsView.cachedViews
    },
    key() {
     return this.$route.path
    }
    
  }
}
</script>
