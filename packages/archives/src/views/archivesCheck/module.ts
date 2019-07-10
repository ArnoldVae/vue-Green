export default[
    {
        path : "/archivesCheck",
        name : "checkRegist",
        meta : {
            title: '调阅登记',
            icon: 'el-icon-menu',
            parentTitle: "归档调阅",
            parentCode: 2, //必须为数字格式，用来排序父级菜单顺序
            parentIcon: "el-icon-menu"
        },
        component : () => import ('./checkRegist.vue')
    }
];
