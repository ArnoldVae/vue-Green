export default[
    {
        path : "/queryanalyze",
        name : "queryanalyze",
        meta : {
            title: '查询分析',
            icon: 'el-icon-menu',
            parentTitle: "查询分析",
            parentCode: 1, //必须为数字格式，用来排序父级菜单顺序
            parentIcon: "el-icon-menu",
            isCollapse: false,
            
        },
        component : () => import ('./queryParsing.vue')
    },
    {
        path : "/integratedQuery",
        name : "integratedQuery",
        meta : {
            title: '查询分析',
            icon: 'el-icon-menu',
            parentTitle: "查询分析",
            parentCode: 1, //必须为数字格式，用来排序父级菜单顺序
            parentIcon: "el-icon-menu",
            isCollapse: false,
            
        },
        component : () => import ('./integratedQuery.vue')
    }
];
