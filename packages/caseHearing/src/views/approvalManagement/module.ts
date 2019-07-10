export default[
    {
        path : "/appFromAudit",
        name : "appFromAudit",
        meta : {
            title: '形式审核',
            icon: 'el-icon-menu',
            parentTitle: "报批案件管理",
            parentCode: 3, //必须为数字格式，用来排序父级菜单顺序
            parentIcon: "el-icon-menu",
            isCollapse: false
        },
        component : () => import ('./appFromAudit.vue')
    },
    {
        path : "/appAuditReview",
        name : "appAuditReview",
        meta : {
            title: '审核审议',
            icon: 'el-icon-menu',
            parentTitle: "报批案件管理",
            parentCode: 3, //必须为数字格式，用来排序父级菜单顺序
            parentIcon: "el-icon-menu",
            isCollapse: false
        },
        component : () => import ('./appAuditReview.vue')
    },
    {
        path : "/appExecution",
        name : "appExecution",
        meta : {
            title: '案件执行',
            icon: 'el-icon-menu',
            parentTitle: "报批案件管理",
            parentCode: 3, //必须为数字格式，用来排序父级菜单顺序
            parentIcon: "el-icon-menu",
            isCollapse: false
        },
        component : () => import ('./appExecution.vue')
    },

];
