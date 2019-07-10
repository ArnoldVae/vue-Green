export default[
    {
        path : "/exFromAudit",
        name : "exFromAudit",
        meta : {
            title: '形式审核',
            icon: 'el-icon-menu',
            parentTitle: "审核案件管理",
            parentCode: 3, //必须为数字格式，用来排序父级菜单顺序
            parentIcon: "el-icon-menu",
            isCollapse: false
        },
        component : () => import ('./exFromAudit.vue')
    },
    {
        path : "/exAuditReview",
        name : "exAuditReview",
        meta : {
            title: '审核审议',
            icon: 'el-icon-menu',
            parentTitle: "审核案件管理",
            parentCode: 3, //必须为数字格式，用来排序父级菜单顺序
            parentIcon: "el-icon-menu",
            isCollapse: false
        },
        component : () => import ('./exAuditReview.vue')
    },
    {
        path : "/exExecution",
        name : "exExecution",
        meta : {
            title: '案件执行',
            icon: 'el-icon-menu',
            parentTitle: "审核案件管理",
            parentCode: 3, //必须为数字格式，用来排序父级菜单顺序
            parentIcon: "el-icon-menu",
            isCollapse: false
        },
        component : () => import ('./exExecution.vue')
    },

];
