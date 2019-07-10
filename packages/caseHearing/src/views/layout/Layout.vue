<template>
  <div class="app-wrapper" :class="{'hide-sidebar':$app.sidebar.opened}">
    <sidebar class="sidebar-container" v-if="!$isIframe"/>
    <div class="main-container" :class="{isIframe:$isIframe}">
      <navbar v-if="!$isIframe"/>
      <tags-view v-if="!$isIframe"/>
      <app-main/>
      <!-- <div class="copyright" v-if="!$isIframe">
        <span>2018 © 中央纪委信息中心版权所有</span>
      </div> -->
    </div>
  </div>
</template>

<script lang="ts">
import { Navbar, Sidebar, AppMain, TagsView } from './components/index'
import ResizeMixin from './mixin/resizeHandler'
import { Component, Vue } from "vue-property-decorator";
import { State, Action, Getter } from "vuex-class";

@Component({
  name: 'Layout',
  components: {
    Navbar,
    Sidebar,
    AppMain,
    TagsView
  },
  mixins: [ResizeMixin],
  data() {
    return {

    }
  }
})
export default class Layout extends Vue{
  @State $app;
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
  .isIframe {
    .app-main {
      position: absolute;
      top: 0 !important;
      bottom: 0 !important;
      left: 0 !important;
      right: 0 !important;
      overflow: auto !important;
    }
  }
}
</style>
