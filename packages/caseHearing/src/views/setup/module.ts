export default[
  {
    path : "/organization",
    name : "organization",
    parent : "二级菜单",
    meta : {
      hidden: false,
      title: '机构设置',
      icon: "el-icon-menu",
      parentTitle: "系统功能设置", //一级-菜单标题
      parentCode: 8, //一级-菜单code 必须为数字格式，用来排序父级菜单顺序
      parentIcon: "el-icon-menu", //一级-菜单图标
      isCollapse: true
    },
    component : () => import ('./organization.vue')
  },
    {
        path : "/user",
        name : "user",
        parent : "二级菜单",
        meta : {
            hidden: false,
            title: '用户设置',
            icon: "el-icon-menu",
            parentTitle: "系统功能设置", //一级-菜单标题
            parentCode: 8, //一级-菜单code 必须为数字格式，用来排序父级菜单顺序
            parentIcon: "el-icon-menu" //一级-菜单图标
        },
        component : () => import ('./user.vue')
    }, {
        path : "/role",
        name : "role",
        parent : "二级菜单",
        meta : {
            hidden: false,
            title: '角色设置',
            icon: "el-icon-menu",
            parentTitle: "系统功能设置", //一级-菜单标题
            parentCode: 8, //一级-菜单code 必须为数字格式，用来排序父级菜单顺序
            parentIcon: "el-icon-menu" //一级-菜单图标
        },
        component : () => import ('./role.vue')
    },{
        path : "/jurisdiction",
        name : "jurisdiction",
        parent : "二级菜单",
        meta : {
            hidden: false,
            title: '权限设置',
            icon: "el-icon-menu",
            parentTitle: "系统功能设置", //一级-菜单标题
            parentCode: 8, //一级-菜单code 必须为数字格式，用来排序父级菜单顺序
            parentIcon: "el-icon-menu" //一级-菜单图标
        },
        component : () => import ('./jurisdiction.vue')
    },{
        path : "/notice",
        name : "notice",
        parent : "二级菜单",
        meta : {
            hidden: false,
            title: '通知公告',
            icon: "el-icon-menu",
            parentTitle: "系统功能设置", //一级-菜单标题
            parentCode: 8, //一级-菜单code 必须为数字格式，用来排序父级菜单顺序
            parentIcon: "el-icon-menu" //一级-菜单图标
        },
        component : () => import ('./notice.vue')
    },{
        path : "/dictionaries",
        name : "dictionaries",
        parent : "二级菜单",
        meta : {
            hidden: false,
            title: '字典管理',
            icon: "el-icon-menu",
            parentTitle: "系统功能设置", //一级-菜单标题
            parentCode: 8, //一级-菜单code 必须为数字格式，用来排序父级菜单顺序
            parentIcon: "el-icon-menu" //一级-菜单图标
        },
        component : () => import ('./dictionaries.vue')
    },
    {
        path : "/menu",
        name : "menu",
        parent : "二级菜单",
        meta : {
            hidden: false,
            title: '菜单管理',
            icon: "el-icon-menu",
            parentTitle: "系统功能设置", //一级-菜单标题
            parentCode: 8, //一级-菜单code 必须为数字格式，用来排序父级菜单顺序
            parentIcon: "el-icon-menu" //一级-菜单图标
        },
        component : () => import ('./menu.vue')
    },
    {
        path : "/loginMsg",
        name : "loginMsg",
        parent : "二级菜单",
        meta : {
            hidden: false,
            title: '登录日志审计',
            icon: "el-icon-menu",
            parentTitle: "系统功能设置", //一级-菜单标题
            parentCode: 8, //一级-菜单code 必须为数字格式，用来排序父级菜单顺序
            parentIcon: "el-icon-menu" //一级-菜单图标
        },
        component : () => import ('./loginMsg.vue')
    },
    {
        path : "/operator",
        name : "operator",
        parent : "二级菜单",
        meta : {
            hidden: false,
            title: '操作日志审计',
            icon: "el-icon-menu",
            parentTitle: "系统功能设置", //一级-菜单标题
            parentCode: 8, //一级-菜单code 必须为数字格式，用来排序父级菜单顺序
            parentIcon: "el-icon-menu" //一级-菜单图标
        },
        component : () => import ('./operator.vue')
    },

];
