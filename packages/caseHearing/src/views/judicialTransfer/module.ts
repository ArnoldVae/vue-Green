export default[
    {
        path : "/transFromAudit",
        name : "transFromAudit",
        meta : {
            title: '形式审核',
            icon: 'el-icon-menu',
            parentTitle: "移送司法机关",
            parentCode: 5, //必须为数字格式，用来排序父级菜单顺序
            parentIcon: "el-icon-menu",
            isCollapse: false
        },
        component : () => import ('./transFromAudit.vue')
    },
    {
        path : "/transAuditReview",
        name : "transAuditReview",
        meta : {
            title: '审核审议',
            icon: 'el-icon-menu',
            parentTitle: "移送司法机关",
            parentCode: 5, //必须为数字格式，用来排序父级菜单顺序
            parentIcon: "el-icon-menu",
            isCollapse: false
        },
        component : () => import ('./transAuditReview.vue')
    },
    {
        path : "/transExecution",
        name : "transExecution",
        meta : {
            title: '案件执行',
            icon: 'el-icon-menu',
            parentTitle: "移送司法机关",
            parentCode: 5, //必须为数字格式，用来排序父级菜单顺序
            parentIcon: "el-icon-menu",
            isCollapse: false
        },
        component : () => import ('./transExecution.vue')
    },

];
