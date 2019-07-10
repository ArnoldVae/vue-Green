<template>
  <div class="navbar">
    <el-row :gutter="20">
      <el-col class="log-wrapper" :span="7">
        <img class="logo" src="img/logo.png" alt>
        <span class="system-name">某机关系统  | 档案管理系统</span>
      </el-col>
      <el-col :span="13">
        <div
          class="menu-wrapper"
          v-if="!menu.hide"
          :class="{active:menu.active}"
          v-for="(menu,index) in menus"
          :key="index"
          @click="updateSecondMenus(menu)"
        >
          <i class="icon el-icon-menu"></i>
          <div
            class="name"
            v-if="menu.children&&menu.children[0]"
          >{{menu.children[0].meta.parentTitle}}</div>
        </div>
      </el-col>
      <el-col class="more-wrapper" :span="4">
        <el-dropdown>
          <span class="el-dropdown-link">
            更多
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item
              class="more-menu"
              v-if="menu.hide"
              :class="{active:menu.active}"
              v-for="(menu,index) in menus"
              :key="index"
            >
              <i class="icon el-icon-menu" @click="updateSecondMenus(menu)"></i>
              <div
                class="name"
                v-if="menu.children&&menu.children[0]"
                @click="updateSecondMenus(menu)"
              >{{menu.children[0].meta.parentTitle}}</div>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <el-dropdown class="my">
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
  // 在实例创建完成后被立即调用
  menus = [];
  menusTemp = [
    {
      title: "一级菜单1",
      children: [
        {
          path: "/formAudit",
          name: "formAudit",
          meta: {
            hidden: false, //二级-是否显示此菜单 默认false
            title: "一级菜单1-1", //二级-菜单标题
            icon: "el-icon-menu", //二级-菜单图标 className
            parentTitle: "一级菜单1", //一级-菜单标题
            parentCode: 2, //一级-菜单code 必须为数字格式，用来排序父级菜单顺序
            parentIcon: "el-icon-menu" //一级-菜单图标
          }
        },
        {
          path: "/formAudit",
          name: "formAudit",
          meta: {
            hidden: false, //二级-是否显示此菜单 默认false
            title: "一级菜单1-2", //二级-菜单标题
            icon: "el-icon-menu", //二级-菜单图标 className
            parentTitle: "一级菜单1", //一级-菜单标题
            parentCode: 2, //一级-菜单code 必须为数字格式，用来排序父级菜单顺序
            parentIcon: "el-icon-menu" //一级-菜单图标
          }
        },
        {
          path: "/formAudit",
          name: "formAudit",
          meta: {
            hidden: false, //二级-是否显示此菜单 默认false
            title: "一级菜单1-2", //二级-菜单标题
            icon: "el-icon-menu", //二级-菜单图标 className
            parentTitle: "一级菜单1", //一级-菜单标题
            parentCode: 2, //一级-菜单code 必须为数字格式，用来排序父级菜单顺序
            parentIcon: "el-icon-menu" //一级-菜单图标
          }
        },
        {
          path: "/formAudit",
          name: "formAudit",
          meta: {
            hidden: false, //二级-是否显示此菜单 默认false
            title: "一级菜单1-2", //二级-菜单标题
            icon: "el-icon-menu", //二级-菜单图标 className
            parentTitle: "一级菜单1", //一级-菜单标题
            parentCode: 2, //一级-菜单code 必须为数字格式，用来排序父级菜单顺序
            parentIcon: "el-icon-menu" //一级-菜单图标
          }
        },
        {
          path: "/formAudit",
          name: "formAudit",
          meta: {
            hidden: false, //二级-是否显示此菜单 默认false
            title: "一级菜单1-2", //二级-菜单标题
            icon: "el-icon-menu", //二级-菜单图标 className
            parentTitle: "一级菜单1", //一级-菜单标题
            parentCode: 2, //一级-菜单code 必须为数字格式，用来排序父级菜单顺序
            parentIcon: "el-icon-menu" //一级-菜单图标
          }
        },
        {
          path: "/formAudit",
          name: "formAudit",
          meta: {
            hidden: false, //二级-是否显示此菜单 默认false
            title: "一级菜单1-2", //二级-菜单标题
            icon: "el-icon-menu", //二级-菜单图标 className
            parentTitle: "一级菜单1", //一级-菜单标题
            parentCode: 2, //一级-菜单code 必须为数字格式，用来排序父级菜单顺序
            parentIcon: "el-icon-menu" //一级-菜单图标
          }
        },
        {
          path: "/formAudit",
          name: "formAudit",
          meta: {
            hidden: false, //二级-是否显示此菜单 默认false
            title: "一级菜单1-2", //二级-菜单标题
            icon: "el-icon-menu", //二级-菜单图标 className
            parentTitle: "一级菜单1", //一级-菜单标题
            parentCode: 2, //一级-菜单code 必须为数字格式，用来排序父级菜单顺序
            parentIcon: "el-icon-menu" //一级-菜单图标
          }
        },
        {
          path: "/formAudit",
          name: "formAudit",
          meta: {
            hidden: false, //二级-是否显示此菜单 默认false
            title: "一级菜单1-2", //二级-菜单标题
            icon: "el-icon-menu", //二级-菜单图标 className
            parentTitle: "一级菜单1", //一级-菜单标题
            parentCode: 2, //一级-菜单code 必须为数字格式，用来排序父级菜单顺序
            parentIcon: "el-icon-menu" //一级-菜单图标
          }
        },
        {
          path: "/formAudit",
          name: "formAudit",
          meta: {
            hidden: false, //二级-是否显示此菜单 默认false
            title: "一级菜单1-2", //二级-菜单标题
            icon: "el-icon-menu", //二级-菜单图标 className
            parentTitle: "一级菜单1", //一级-菜单标题
            parentCode: 2, //一级-菜单code 必须为数字格式，用来排序父级菜单顺序
            parentIcon: "el-icon-menu" //一级-菜单图标
          }
        },
        {
          path: "/formAudit",
          name: "formAudit",
          meta: {
            hidden: false, //二级-是否显示此菜单 默认false
            title: "一级菜单1-2", //二级-菜单标题
            icon: "el-icon-menu", //二级-菜单图标 className
            parentTitle: "一级菜单1", //一级-菜单标题
            parentCode: 2, //一级-菜单code 必须为数字格式，用来排序父级菜单顺序
            parentIcon: "el-icon-menu" //一级-菜单图标
          }
        },
        {
          path: "/formAudit",
          name: "formAudit",
          meta: {
            hidden: false, //二级-是否显示此菜单 默认false
            title: "一级菜单1-2", //二级-菜单标题
            icon: "el-icon-menu", //二级-菜单图标 className
            parentTitle: "一级菜单1", //一级-菜单标题
            parentCode: 2, //一级-菜单code 必须为数字格式，用来排序父级菜单顺序
            parentIcon: "el-icon-menu" //一级-菜单图标
          }
        },
        {
          path: "/formAudit",
          name: "formAudit",
          meta: {
            hidden: false, //二级-是否显示此菜单 默认false
            title: "一级菜单1-2", //二级-菜单标题
            icon: "el-icon-menu", //二级-菜单图标 className
            parentTitle: "一级菜单1", //一级-菜单标题
            parentCode: 2, //一级-菜单code 必须为数字格式，用来排序父级菜单顺序
            parentIcon: "el-icon-menu" //一级-菜单图标
          }
        },
        {
          path: "/formAudit",
          name: "formAudit",
          meta: {
            hidden: false, //二级-是否显示此菜单 默认false
            title: "一级菜单1-2", //二级-菜单标题
            icon: "el-icon-menu", //二级-菜单图标 className
            parentTitle: "一级菜单1", //一级-菜单标题
            parentCode: 2, //一级-菜单code 必须为数字格式，用来排序父级菜单顺序
            parentIcon: "el-icon-menu" //一级-菜单图标
          }
        }
      ]
    },
    {
      title: "一级菜单2",
      children: [
        {
          path: "/formAudit",
          name: "formAudit",
          meta: {
            hidden: false, //二级-是否显示此菜单 默认false
            title: "一级菜单2-1", //二级-菜单标题
            icon: "el-icon-menu", //二级-菜单图标 className
            parentTitle: "一级菜单2-1", //一级-菜单标题
            parentCode: 2, //一级-菜单code 必须为数字格式，用来排序父级菜单顺序
            parentIcon: "el-icon-menu" //一级-菜单图标
          }
        },
        {
          path: "/formAudit",
          name: "formAudit",
          meta: {
            hidden: false, //二级-是否显示此菜单 默认false
            title: "一级菜单2-2", //二级-菜单标题
            icon: "el-icon-menu", //二级-菜单图标 className
            parentTitle: "一级菜单2-1", //一级-菜单标题
            parentCode: 2, //一级-菜单code 必须为数字格式，用来排序父级菜单顺序
            parentIcon: "el-icon-menu" //一级-菜单图标
          }
        }
      ]
    },
    {
      title: "一级菜单2",
      children: [
        {
          path: "/formAudit",
          name: "formAudit",
          meta: {
            hidden: false, //二级-是否显示此菜单 默认false
            title: "一级菜单2-1", //二级-菜单标题
            icon: "el-icon-menu", //二级-菜单图标 className
            parentTitle: "一级菜单2-1", //一级-菜单标题
            parentCode: 2, //一级-菜单code 必须为数字格式，用来排序父级菜单顺序
            parentIcon: "el-icon-menu" //一级-菜单图标
          }
        },
        {
          path: "/formAudit",
          name: "formAudit",
          meta: {
            hidden: false, //二级-是否显示此菜单 默认false
            title: "一级菜单2-2", //二级-菜单标题
            icon: "el-icon-menu", //二级-菜单图标 className
            parentTitle: "一级菜单2-1", //一级-菜单标题
            parentCode: 2, //一级-菜单code 必须为数字格式，用来排序父级菜单顺序
            parentIcon: "el-icon-menu" //一级-菜单图标
          }
        }
      ]
    },
    {
      title: "一级菜单2",
      children: [
        {
          path: "/formAudit",
          name: "formAudit",
          meta: {
            hidden: false, //二级-是否显示此菜单 默认false
            title: "一级菜单2-1", //二级-菜单标题
            icon: "el-icon-menu", //二级-菜单图标 className
            parentTitle: "一级菜单2-1", //一级-菜单标题
            parentCode: 2, //一级-菜单code 必须为数字格式，用来排序父级菜单顺序
            parentIcon: "el-icon-menu" //一级-菜单图标
          }
        },
        {
          path: "/formAudit",
          name: "formAudit",
          meta: {
            hidden: false, //二级-是否显示此菜单 默认false
            title: "一级菜单2-2", //二级-菜单标题
            icon: "el-icon-menu", //二级-菜单图标 className
            parentTitle: "一级菜单2-1", //一级-菜单标题
            parentCode: 2, //一级-菜单code 必须为数字格式，用来排序父级菜单顺序
            parentIcon: "el-icon-menu" //一级-菜单图标
          }
        }
      ]
    },
    {
      title: "一级菜单2",
      children: [
        {
          path: "/formAudit",
          name: "formAudit",
          meta: {
            hidden: false, //二级-是否显示此菜单 默认false
            title: "一级菜单2-1", //二级-菜单标题
            icon: "el-icon-menu", //二级-菜单图标 className
            parentTitle: "一级菜单2-1", //一级-菜单标题
            parentCode: 2, //一级-菜单code 必须为数字格式，用来排序父级菜单顺序
            parentIcon: "el-icon-menu" //一级-菜单图标
          }
        },
        {
          path: "/formAudit",
          name: "formAudit",
          meta: {
            hidden: false, //二级-是否显示此菜单 默认false
            title: "一级菜单2-2", //二级-菜单标题
            icon: "el-icon-menu", //二级-菜单图标 className
            parentTitle: "一级菜单2-1", //一级-菜单标题
            parentCode: 2, //一级-菜单code 必须为数字格式，用来排序父级菜单顺序
            parentIcon: "el-icon-menu" //一级-菜单图标
          }
        }
      ]
    },
    {
      title: "一级菜单2",
      children: [
        {
          path: "/formAudit",
          name: "formAudit",
          meta: {
            hidden: false, //二级-是否显示此菜单 默认false
            title: "一级菜单2-1", //二级-菜单标题
            icon: "el-icon-menu", //二级-菜单图标 className
            parentTitle: "一级菜单2-1", //一级-菜单标题
            parentCode: 2, //一级-菜单code 必须为数字格式，用来排序父级菜单顺序
            parentIcon: "el-icon-menu" //一级-菜单图标
          }
        },
        {
          path: "/formAudit",
          name: "formAudit",
          meta: {
            hidden: false, //二级-是否显示此菜单 默认false
            title: "一级菜单2-2", //二级-菜单标题
            icon: "el-icon-menu", //二级-菜单图标 className
            parentTitle: "一级菜单2-1", //一级-菜单标题
            parentCode: 2, //一级-菜单code 必须为数字格式，用来排序父级菜单顺序
            parentIcon: "el-icon-menu" //一级-菜单图标
          }
        }
      ]
    },
    {
      title: "一级菜单2",
      children: [
        {
          path: "/formAudit",
          name: "formAudit",
          meta: {
            hidden: false, //二级-是否显示此菜单 默认false
            title: "一级菜单2-1", //二级-菜单标题
            icon: "el-icon-menu", //二级-菜单图标 className
            parentTitle: "一级菜单2-1", //一级-菜单标题
            parentCode: 2, //一级-菜单code 必须为数字格式，用来排序父级菜单顺序
            parentIcon: "el-icon-menu" //一级-菜单图标
          }
        },
        {
          path: "/formAudit",
          name: "formAudit",
          meta: {
            hidden: false, //二级-是否显示此菜单 默认false
            title: "一级菜单2-2", //二级-菜单标题
            icon: "el-icon-menu", //二级-菜单图标 className
            parentTitle: "一级菜单2-1", //一级-菜单标题
            parentCode: 2, //一级-菜单code 必须为数字格式，用来排序父级菜单顺序
            parentIcon: "el-icon-menu" //一级-菜单图标
          }
        }
      ]
    },
    {
      title: "一级菜单2",
      children: [
        {
          path: "/formAudit",
          name: "formAudit",
          meta: {
            hidden: false, //二级-是否显示此菜单 默认false
            title: "一级菜单2-1", //二级-菜单标题
            icon: "el-icon-menu", //二级-菜单图标 className
            parentTitle: "一级菜单2-1", //一级-菜单标题
            parentCode: 2, //一级-菜单code 必须为数字格式，用来排序父级菜单顺序
            parentIcon: "el-icon-menu" //一级-菜单图标
          }
        },
        {
          path: "/formAudit",
          name: "formAudit",
          meta: {
            hidden: false, //二级-是否显示此菜单 默认false
            title: "一级菜单2-2", //二级-菜单标题
            icon: "el-icon-menu", //二级-菜单图标 className
            parentTitle: "一级菜单2-1", //一级-菜单标题
            parentCode: 2, //一级-菜单code 必须为数字格式，用来排序父级菜单顺序
            parentIcon: "el-icon-menu" //一级-菜单图标
          }
        }
      ]
    }
  ];
  created() {
    // 组装菜单模板
    this.menus = this.group(this.$permission.routers[0].children);
    this.menus.sort((a, b) => {
      return a.children[0].meta.parentCode - b.children[0].meta.parentCode;
    });
    // 设置菜单高亮
    this.setMenuActive(false);
    this.$router.beforeEach((to, from, next) => {
      this.setMenuActive(to);
      next();
    });
    this.getDays();
  }
  days = []; //用于存放每个月天数数组,
  // 获取每个月最多多少天
  getMaxDay(year, month) {
    var dayCount;
    var now = new Date(year, month, 0);
    dayCount = now.getDate();
    return dayCount;
  }
  // 组装需要的数据模板
  getDays() {
    var maxDay = this.getMaxDay(2019, 2);
    for (let i = 0; i < maxDay; i++) {
      this.days.push({
        code: i,
        name: i + 1 + "日"
      });
    }
    console.log(this.days, "=======");
  }
  /**
   * 设置菜单高亮
   */
  setMenuActive(to) {
    if (to) {
      this.menus.forEach(item => {
        // 设置一级路由高亮
        if (to.meta && to.meta.parentTitle === item.name) {
          item.active = true;
        } else {
          item.active = false;
        }
      });
    } else {
      //初始化设置一级菜单高亮
      const path = window.location.hash.split("#")[1];
      let currMenu = [];
      this.menus.forEach(item => {
        item.children.forEach(target => {
          if (target.path === path) {
            item.active = true;
            currMenu = item;
          }
        });
      });
      this.updateSecondMenus(currMenu, true);
    }
  }
  /**
   * 更新二级菜单
   * true:刷新页面
   * false:正常跳转
   */
  updateSecondMenus(menu, flag) {
    menu.active = true;
    if (!flag) {
      this.$router.push({
        name: menu.children[0].name
      });
    }
    this.$store.commit("SET_SECOND_MENUS", menu.children);
  }
  /** 菜单分组 */
  group(arr) {
    const values = [];
    const menus = [];
    arr.forEach(item => {
      arr.active = false;
      if (
        item.meta.parentTitle &&
        values.indexOf(item.meta.parentTitle) == -1
      ) {
        values.push(item.meta.parentTitle);
      }
    });
    values.forEach((item, index) => {
      menus[index] = {
        name: item,
        children: []
      };
    });
    menus.forEach(item => {
      item.active = false;
      arr.forEach(target => {
        if (item.name === target.meta.parentTitle) {
          item.children.push(target);
        }
      });
      item["path"] = arr[0].path;
    });
    menus.forEach(item => {
      if (item.children[0]) item.hide = item.children[0].meta.isCollapse;
    });
    return menus;
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.navbar {
  position: relative;
  height: $navbarHeight;
  overflow: hidden;
  background: #1954af;
  background: url("../../../../public/img/header_bg.png") no-repeat;
  .log-wrapper {
    position: relative;
    height: $navbarHeight;
    padding: 0 !important;
    .logo {
      position: relative;
      height: 46px;
      top: 50%;
      left: -29px;
      transform: translateY(-50%);
    }
    .system-name {
      color: #fff;
      font-size: 18px;
      font-weight: 700;
      position: relative;
      top: -3px;
      right: 16px;
    }
  }
  .menu-wrapper {
    width: 120px;
    height: $navbarHeight;
    color: #ffffff;
    display: inline-block;
    position: relative;
    padding: 10px 0;
    .icon {
      font-size: 28px;
    }
    .name {
      margin-top: 5px;
      font-size: 14px;
    }
  }
  .more-wrapper {
    height: $navbarHeight;
    .el-dropdown-link {
      top: 34px;
      color: #fff;
    }
    .el-dropdown {
      position: relative;
      top: 37px;
      right: 50px;
    }
    .my {
      position: relative;
      top: 19px;
      right: 0px;
      line-height: 32px;
      img {
        vertical-align: bottom;
      }
    }
  }
  .active {
    background: $menuActiveBg;
  }
}
</style>
