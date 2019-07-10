<template>
  <div class="navbar">
    <el-row>
      <el-col class="log-wrapper" :span="9">
        <div class="system-name">
          <img class="logo" src="img/logo.png" alt>
          <span>某机关信息系统 | <span style="font-size:20px;">案件监督管理应用</span></span>
        </div>
      </el-col>
      <el-col :span="9">
        <div id="navbar">
          <div
            class="menu-wrapper"
            v-if="menu.isOutside"
            :class="{active:menu.active}"
            v-for="(menu,index) in menus"
            :key="index"
            @click="updateSecondMenus(menu,true)"
          >
            <i class="icon el-icon-menu"></i>
            <div class="name" v-if="menu.children&&menu.children[0]">{{menu.title}}</div>
          </div>
        </div>
      </el-col>
      <el-col class="more-wrapper" :span="4" :class="{active:currOutMenu.title}">
        <i class="icon el-icon-menu" v-show="menus.length>currFirstMenuNum"></i>
        <el-dropdown class="name" @command="updateSecondMenus" v-show="menus.length>currFirstMenuNum">
          <div class="el-dropdown-link">
            {{currOutMenu.title||"更多"}}
            <i class="el-icon-arrow-down el-icon--right"></i>
          </div>
          <el-dropdown-menu slot="dropdown" style="height:400px;overflow:auto">
            <el-dropdown-item
              class="more-menu"
              v-if="!menu.isOutside"
              v-for="(menu,index) in menus"
              :command="menu"
              :key="index"
            >
              <i class="icon el-icon-menu"></i>
              <div class="name" v-if="menu.children&&menu.children[0]">{{menu.title}}</div>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
      <el-col class="my-wrapper" :span="3">
        <el-dropdown>
          <img src="img/head_portrait.png" alt>
          <span class="el-dropdown-link">
            李建国
            <i class="el-icon-caret-bottom"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>注销</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
    </el-row>
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
  @Action GetPermisionRoutes: any;
  @Action SetPermisionRoutes: any;
  @Action ToggleSidebar: any;
  screenWidth: number; // 屏幕高度
  menus = [];
  showMoreMenu: boolean = false; // 是否展示更多menu
  currFirstMenuNum = 4; //当前展示一级菜单数量
  initStatus = true; //初始状态
  currOutMenu = {};

  mounted() {
    this.$nextTick(function() {
      this.initMenus();
      const that = this;
      let resizeTimer = null;
      window.onresize = function() {
        // 定义窗口大小变更通知事件
        if (resizeTimer) {
          clearTimeout(resizeTimer);
        }
        resizeTimer = setTimeout(function() {
          that.initMenus();
        }, 400);
      };
      // 动态监听路由变化并设置高亮
      that.$router.beforeEach((to, from, next) => {
        that.setMenuActive(to);
        next();
      });
    });
  }
  /**
   * 初始化菜单
   */
  initMenus() {
    let windowWidth = document.getElementById("navbar").offsetWidth;
    this.currFirstMenuNum = Math.floor(windowWidth / 120);
    this.getPermisionRoutes(this.currFirstMenuNum);
  }
  /**
   * 获取菜单并设置状态
   */
  getPermisionRoutes(num) {
    const that = this;
    if (this.initStatus) {
      //获取菜单
      that.GetPermisionRoutes({ currFirstMenuNum: num }).then(() => {
        that.menus = that.$permission.permissionRouters;
        // 设置菜单高亮&&更新当前二级菜单
        that.setMenuActive();
      });
      this.initStatus = false;
    } else {
      that.SetPermisionRoutes({
        menus: this.menus,
        currFirstMenuNum: this.currFirstMenuNum
      });
    }
  }
  /**
   * 设置菜单高亮
   * 设置隐藏、显示左侧菜单
   * 更新当前二级菜单
   */
  setMenuActive(to) {
    const path = to ? to.path : window.location.hash.split("#")[1];

    // 判断当前路由是否需要隐藏左侧菜单
    this.getNode(this.menus, path)
      ? this.ToggleSidebar(false)
      : this.ToggleSidebar(true);

    // 获取当前菜单并设置高亮字段
    let currMenu = [];
    this.menus.forEach(item => {
      item.children.forEach(target => {
        if (target.path === path) {
          item.active = true;
          currMenu = item;
        } else {
          item.active = false;
        }
      });
    });
    this.updateSecondMenus(currMenu, false);
  }
  /**
   * 更新二级菜单
   * 如果当前菜单在更多里面则移出到外面显示
   * flag:false(刷新页面)
   * flag:true(正常点击跳转-默认进入第一个菜单)
   */
  updateSecondMenus(menu, flag) {
    menu.active = true;
    const that = this;
    // 如果当前菜单在更多里面则移出到外面显示
    that.currOutMenu = {};
    if (!menu.isOutside) {
      that.currOutMenu = menu;
    }
    // 正常点击跳转-默认进入第一个菜单
    if (flag) {
      this.$router.push({
        path: menu.children[0].path
      });
    }
    this.$store.commit("SET_SECOND_MENUS", menu.children);
  }
  /**
   * 获取当前菜单且不是hidden状态
   */
  getNode(arr, path) {
    let node = undefined;
    for (var i = 0, len = arr.length; i < len; i++) {
      if (node) {
        break;
      }
      var obj = arr[i];
      if (!obj || !obj.url) {
        continue;
      }
      if (obj.url == path) {
        node = obj;
        break;
      } else {
        if (obj.children) {
          node = this.getNode(obj.children, path);
        } else {
          continue;
        }
      }
    }
    return node && node.hidden ? undefined : node;
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.navbar {
  font-size: 1em;
  position: relative;
  height: $navbarHeight;
  overflow: hidden;
  background: #1954af;
  background: url("../../../../public/img/header_bg.png") no-repeat 100%;
  .log-wrapper {
    position: relative;
    height: $navbarHeight;
    padding: 0 !important;
    text-align: left;
    .logo {
      position: relative;
      height: 46px;
      top: 50%;
      margin-right: 16px;
      margin-left: 30px;
      transform: translateY(-50%);
    }
    .system-name {
      color: #fff;
      font-size: 24px;
      font-weight: 700;
      position: relative;
      top: -3px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      height: 100%;
    }
  }
  .menu-wrapper {
    width: 120px;
    height: $navbarHeight;
    color: #ffffff;
    display: inline-block;
    position: relative;
    padding: 10px 0;
    cursor: pointer;
    .icon {
      font-size: 28px;
    }
    .name {
      margin-top: 5px;
      font-size: 16px;
    }
  }
  .more-wrapper {
    width: 120px;
    height: $navbarHeight;
    color: #ffffff;
    display: inline-block;
    position: relative;
    padding: 10px 0;
    cursor: pointer;
    .icon {
      font-size: 28px;
      display:block;
    }
    .name {
      margin-top: 5px;
      font-size: 14px;
      .el-dropdown-link{
        color:#ffffff;
      }
    }
  }
  .my-wrapper {
    cursor: pointer;
    height: $navbarHeight;
    position: relative;
    top: 19px;
    line-height: 32px;
    .el-dropdown-link {
      color: #fff;
    }
    img {
      vertical-align: bottom;
    }
  }
  .active {
    background: $menuActiveBg;
  }
}
</style>
