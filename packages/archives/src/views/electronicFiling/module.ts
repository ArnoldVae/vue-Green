export default[
    {
        path : "/archiveFile",
        name : "archiveFile",
        meta : {
            title: '档案归档',
            icon: 'el-icon-menu',
            parentTitle: "电子归档",
            parentCode: 1, //必须为数字格式，用来排序父级菜单顺序
            parentIcon: "el-icon-menu",
            isCollapse: false,
            
        },
       component : () => import ('./archiveFile/archiveFiling.vue')
      // component : () => import ('./modal/electronicFilingInfo.vue')
    },{
        path : "/fileTransfer",
        name : "fileTransfer",
        meta : {
            title: '档案移交',
            icon: 'el-icon-menu',
            parentTitle: "电子归档",
            parentCode: 1, //必须为数字格式，用来排序父级菜单顺序
            parentIcon: "el-icon-menu",
            isCollapse: false
        },
        component : () => import ('./fileTransfer/fileTransferNew.vue')
    }
    
];
