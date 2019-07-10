<style lang="scss" scoped>
.menus {
  position: absolute;
  top: 72px;
  bottom: 0;
  left: 0;
  right: 0;
  width: $sideBarWidth;
  overflow: auto;
  box-shadow: darkgrey 3px 2px 10px 0px;
  .menu-top {
    height: 34px;
    color: #409eff;
    position: relative;
    i {
      position: relative;
      top: 50%;
      transform: translateY(-50%);
    }
  }
  .menu-wrapper {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: $sideBarWidth;
    overflow: auto;
    .menu {
      height: 100px;
      background: $secondMenuBg;
      border-bottom: 1px solid #2d7ee2;
      color: #ffffff;
      padding: 23px 0;
      cursor: pointer;
      .icon {
        font-size: 35px;
      }
      .name {
        font-size: 12px;
      }
    }
    .router-link-active {
      background: $menuActiveBg;
    }
  }
}
</style>

<template>
  <div class="menus">
    <div class="menu-wrapper">
      <router-link
        v-if="!menu.meta.hidden"
        tag="div"
        :to="menu.path"
        class="menu"
        v-for="(menu,index) in $permission.secondMenus"
        :key="index"
      >
        <i class="icon el-icon-menu"></i>
        <div class="name" v-if="menu.meta">{{menu.meta.title}}</div>
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { State, Action, Getter } from "vuex-class";

@Component({
  components: {}
})
export default class Navbar extends Vue {
  @State $permission;
  created() {}
}
</script>
