export default [
    {
        path: "/simpleQuery",
        name: "simpleQuery",
        parent: "二级菜单",
        meta: {
            hidden: false,
            title: '简单查询',
            icon: "el-icon-menu",
            parentTitle: "查询统计分析", //一级-菜单标题
            parentCode: 5, //一级-菜单code 必须为数字格式，用来排序父级菜单顺序
            parentIcon: "el-icon-menu", //一级-菜单图标
            isCollapse: true
        },
        component: () => import ('./simpleQuery.vue')
    },
    {
        path: "/reportForm",
        name: "reportForm",
        parent: "二级菜单",
        meta: {
            hidden: false,
            title: '报表统计',
            icon: "el-icon-menu",
            parentTitle: "查询统计分析", //一级-菜单标题
            parentCode: 5, //一级-菜单code 必须为数字格式，用来排序父级菜单顺序
            parentIcon: "el-icon-menu" //一级-菜单图标
        },
        component: () => import ('./reportForm.vue')
    },

];
