export default [
    {
        path: "/approvalType",
        name: "approvalType",
        parent: "二级菜单",
        meta: {
            hidden: false,
            title: '报批类型设置',
            icon: "el-icon-menu",
            parentTitle: "审理业务设置", //一级-菜单标题
            parentCode: 4, //一级-菜单code 必须为数字格式，用来排序父级菜单顺序
            parentIcon: "el-icon-menu" //一级-菜单图标
        },
        component: () => import ('./approvalType.vue')
    },
    {
        path: "/filingType",
        name: "filingType",
        parent: "二级菜单",
        meta: {
            hidden: false,
            title: '备案类型设置',
            icon: "el-icon-menu",
            parentTitle: "审理业务设置", //一级-菜单标题
            parentCode: 4, //一级-菜单code 必须为数字格式，用来排序父级菜单顺序
            parentIcon: "el-icon-menu" //一级-菜单图标
        },
        component: () => import ('./filingType.vue')
    }, {
        path: "/linkMaterial",
        name: "linkMaterial",
        parent: "二级菜单",
        meta: {
            hidden: false,
            title: '环节材料设置',
            icon: "el-icon-menu",
            parentTitle: "审理业务设置", //一级-菜单标题
            parentCode: 4, //一级-菜单code 必须为数字格式，用来排序父级菜单顺序
            parentIcon: "el-icon-menu" //一级-菜单图标
        },
        component: () => import ('./linkMaterial.vue')
    },

];
