export default [
    {
        path: "/acceptance",
        name: "acceptance",
        parent: "二级菜单",
        meta: {
            hidden: false,
            title: '申诉受理',
            icon: "el-icon-menu",
            parentTitle: "申诉复查管理", //一级-菜单标题
            parentCode: 6, //一级-菜单code 必须为数字格式，用来排序父级菜单顺序
            parentIcon: "el-icon-menu", //一级-菜单图标
            isCollapse: false
        },
        component: () => import ('./acceptance.vue')
    },{
        path: "/examine",
        name: "examine",
        parent: "二级菜单",
        meta: {
            hidden: false,
            title: '复查复核',
            icon: "el-icon-menu",
            parentTitle: "申诉复查管理", //一级-菜单标题
            parentCode: 6, //一级-菜单code 必须为数字格式，用来排序父级菜单顺序
            parentIcon: "el-icon-menu" //一级-菜单图标
        },
        component: () => import ('./examine.vue')
    },{
        path: "/implement",
        name: "implement",
        parent: "二级菜单",
        meta: {
            hidden: false,
            title: '申诉执行',
            icon: "el-icon-menu",
            parentTitle: "申诉复查管理", //一级-菜单标题
            parentCode: 6, //一级-菜单code 必须为数字格式，用来排序父级菜单顺序
            parentIcon: "el-icon-menu" //一级-菜单图标
        },
        component: () => import ('./implement.vue')
    },


];
