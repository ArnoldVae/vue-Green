export default [
    {
        path: "/textTemplate",
        name: "textTemplate",
        parent: "二级菜单",
        meta: {
            hidden: false,
            title: '文字模板设置',
            icon: "el-icon-menu",
            parentTitle: "审理文书设置", //一级-菜单标题
            parentCode: 4, //一级-菜单code 必须为数字格式，用来排序父级菜单顺序
            parentIcon: "el-icon-menu", //一级-菜单图标
            isCollapse: true

        },
        component: () => import ('./textTemplate.vue')
    },
    {
        path: "/textCompilation",
        name: "textCompilation",
        parent: "二级菜单",
        meta: {
            hidden: false,
            title: '文字编制',
            icon: "el-icon-menu",
            parentTitle: "审理文书设置", //一级-菜单标题
            parentCode: 4, //一级-菜单code 必须为数字格式，用来排序父级菜单顺序
            parentIcon: "el-icon-menu" //一级-菜单图标
        },
        component: () => import ('./textCompilation.vue')
    }, {
        path: "/officialDoNo",
        name: "officialDoNo",
        parent: "二级菜单",
        meta: {
            hidden: false,
            title: '公文函号',
            icon: "el-icon-menu",
            parentTitle: "审理文书设置", //一级-菜单标题
            parentCode: 4, //一级-菜单code 必须为数字格式，用来排序父级菜单顺序
            parentIcon: "el-icon-menu" //一级-菜单图标
        },
        component: () => import ('./officialDoNo.vue')
    }

];
