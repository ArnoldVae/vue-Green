export default [
    {
        path: "/supervision",
        name: "supervision",
        parent: "二级菜单",
        meta: {
            hidden: false,
            title: '案件监督',
            icon: "el-icon-menu",
            parentTitle: "案件监督督导", //一级-菜单标题
            parentCode: 4, //一级-菜单code 必须为数字格式，用来排序父级菜单顺序
            parentIcon: "el-icon-menu", //一级-菜单图标
            isCollapse: true

        },
        component: () => import ('./supervision.vue')
    },
    {
        path: "/randomInspection",
        name: "randomInspection",
        parent: "二级菜单",
        meta: {
            hidden: false,
            title: '案件质量抽查',
            icon: "el-icon-menu",
            parentTitle: "案件监督督导", //一级-菜单标题
            parentCode: 4, //一级-菜单code 必须为数字格式，用来排序父级菜单顺序
            parentIcon: "el-icon-menu" //一级-菜单图标
        },
        component: () => import ('./randomInspection.vue')
    },
    {	// 监督督导点击待受理按钮tab页面
        path: "/beAccept",
        name: "beAccept",
        parent: "二级菜单",
        meta: {
            hidden: false,
            title: '待受理',
            icon: "el-icon-menu",
            //parentTitle: "案件监督督导", //一级-菜单标题
           // parentCode: 4, //一级-菜单code 必须为数字格式，用来排序父级菜单顺序
           // parentIcon: "el-icon-menu" //一级-菜单图标
        },
        component: () => import ('./modal/beAccept.vue')
    },
    {	// 监督督导点击待受理按钮tab页面
        path: "/accepted",
        name: "accepted",
        parent: "二级菜单",
        meta: {
            hidden: false,
            title: '受理中',
            icon: "el-icon-menu",
            //parentTitle: "案件监督督导", //一级-菜单标题
           // parentCode: 4, //一级-菜单code 必须为数字格式，用来排序父级菜单顺序
           // parentIcon: "el-icon-menu" //一级-菜单图标
        },
        component: () => import ('./modal/acceptedSupervise.vue')
    },
    {	// 监督督导点击待受理按钮tab页面
        path: "/completedCase",
        name: "completedCase",
        parent: "二级菜单",
        meta: {
            hidden: false,
            title: '已办结',
            icon: "el-icon-menu",
            //parentTitle: "案件监督督导", //一级-菜单标题
           // parentCode: 4, //一级-菜单code 必须为数字格式，用来排序父级菜单顺序
           // parentIcon: "el-icon-menu" //一级-菜单图标
        },
        component: () => import ('./modal/completedCase.vue')
    },

];
