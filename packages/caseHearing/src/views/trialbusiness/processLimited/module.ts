export default [
   
    {
        path: "/processLimited",
        name: "processLimited",
        parent: "二级菜单",
        meta: {
            hidden: false,
            title: '流程时限设置',
            icon: "el-icon-menu",
            parentTitle: "审理业务设置", //一级-菜单标题
            parentCode: 4, //一级-菜单code 必须为数字格式，用来排序父级菜单顺序
            parentIcon: "el-icon-menu" //一级-菜单图标
        },
        component: () => import ('./processLimited.vue')
    }

];
