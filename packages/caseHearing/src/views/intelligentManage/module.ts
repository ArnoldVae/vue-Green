export default [
    {
        path: "/policyBase",
        name: "policyBase",
        parent: "二级菜单",
        meta: {
            hidden: false,
            title: '政策法规库',
            icon: "el-icon-menu",
            parentTitle: "智能辅助管理", //一级-菜单标题
            parentCode: 4, //一级-菜单code 必须为数字格式，用来排序父级菜单顺序
            parentIcon: "el-icon-menu", //一级-菜单图标
            isCollapse: true
        },
        component: () => import ('./policyBase.vue')
    },
    {
        path: "/typicalCaseBase",
        name: "typicalCaseBase",
        parent: "二级菜单",
        meta: {
            hidden: false,
            title: '典型案例库',
            icon: "el-icon-menu",
            parentTitle: "智能辅助管理", //一级-菜单标题
            parentCode: 4, //一级-菜单code 必须为数字格式，用来排序父级菜单顺序
            parentIcon: "el-icon-menu", //一级-菜单图标
            isCollapse: true
        },
        component: () => import ('./typicalCaseBase.vue')
    },

];
