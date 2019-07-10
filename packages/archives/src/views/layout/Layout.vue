<template>
  <div class="app-wrapper">
   <!-- <sidebar class="sidebar-container"/>-->
    <div class="main-container">
      <!--<navbar/>-->
      <!--<	menuMain/>-->
     	<navbar/>
      <tags-view/>
      <app-main/>
    
      <!--<div class="copyright">
        <span>2018 © XXXXXX信息中心版权所有</span>
      </div>-->
    </div>
  </div>
</template>

<script>
import { Navbar, Sidebar, AppMain, TagsView ,MenuMain} from './components/index'
import ResizeMixin from './mixin/resizeHandler'


export default {
  name: 'Layout',
  components: {
    Navbar,
    Sidebar,
    AppMain,
    TagsView,
    MenuMain
  },
  mixins: [ResizeMixin],
  computed: {
	
  },
  methods: {
		
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import "~@/styles/mixin.scss";
.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;
  overflow: hidden;
  .copyright {
    font-size: 12px;
    position: absolute;
    bottom: 0;
    left: $sideBarWidth;
    width: 100%;
    background: #eeeeee;
    span {
      float: left;
      margin-left: 36px;
      padding: 2px;
    }
  }
}
</style>
