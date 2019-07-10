export default[
    {
        path : "/",
        name : "commonPopup",
        meta : {
            title: '档案归档',
            icon: 'el-icon-menu',
            parentTitle: "电子归档",
            parentCode: 1, //必须为数字格式，用来排序父级菜单顺序
            parentIcon: "el-icon-menu",
            isCollapse: false,
            
        },
        component : () => import ('./commonPopup.vue')
    },
    {
    	path : "/appMain",
        name : "appMain",
        meta : {
            title: '主页',
            icon: 'el-icon-menu',
            parentTitle: "档案归档",
            parentCode: 1, //必须为数字格式，用来排序父级菜单顺序
            parentIcon: "el-icon-menu",
            isCollapse: false,
            
        },
        component : () => import ('./modal/AppMain.vue')
    }
];
