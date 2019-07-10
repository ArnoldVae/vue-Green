export default[
    {
        path : "/firstTrial",
        name : "firstTrial",
        meta : {
            hidden: false, //二级-是否显示此菜单 默认false
            title: '初审情况', //二级-菜单标题
            icon: 'el-icon-menu', //二级-菜单图标 className
            parentTitle: "直查案件管理", //一级-菜单标题
            parentCode: 2, //一级-菜单code 必须为数字格式，用来排序父级菜单顺序
            parentIcon: "el-icon-menu" //一级-菜单图标
        },
        component : () => import ('./firstTrailList.vue')
    },
    {
    path : "/formAudit",
    name : "formAudit",
    meta : {
      hidden: false, //二级-是否显示此菜单 默认false
      title: '形式审核', //二级-菜单标题
      icon: 'el-icon-menu', //二级-菜单图标 className
      parentTitle: "直查案件管理", //一级-菜单标题
      parentCode: 2, //一级-菜单code 必须为数字格式，用来排序父级菜单顺序
      parentIcon: "el-icon-menu" //一级-菜单图标
    },
    component : () => import ('./formAudit.vue')
  }, {
    path : "/auditReview",
    name : "auditReview",
    meta : {
      title: '审核审议',
      icon: 'el-icon-menu',
      parentTitle: "直查案件管理",
      parentCode: 2, //必须为数字格式，用来排序父级菜单顺序
      parentIcon: "el-icon-menu"
    },
    component : () => import ('./auditReview.vue')
  }, {
    path : "/execution",
    name : "execution",
    meta : {
      title: '案件执行',
      icon: 'el-icon-menu',
      parentTitle: "直查案件管理",
      parentCode: 2, //必须为数字格式，用来排序父级菜单顺序
      parentIcon: "el-icon-menu"
    },
    component : () => import ('./execution.vue')
  }, {
    path : "/reported",
    name : "reported",
    meta : {
      title: '案件报备',
      icon: 'el-icon-menu',
      parentTitle: "直查案件管理",
      parentCode: 2, //必须为数字格式，用来排序父级菜单顺序
      parentIcon: "el-icon-menu"
    },
    component : () => import ('./reported.vue')
  }
];
