export default[
    {
        path : "/firstTrialAuditing",
        name : "firstTrialAuditing",
        meta : {
            hidden: false, //二级-是否显示此菜单 默认false
            title: '初审情况', //二级-菜单标题
            icon: 'el-icon-menu', //二级-菜单图标 className
            parentTitle: "审核案件管理", //一级-菜单标题
            parentCode: 2, //一级-菜单code 必须为数字格式，用来排序父级菜单顺序
            parentIcon: "el-icon-menu" //一级-菜单图标
        },
        component : () => import ('../auditingCaseManage/caseAccept/caseAcceptMain.vue')//采用公用的
    },
    {
    path : "/modalityAuditing",
    name : "modalityAuditing",
    meta : {
      hidden: false, //二级-是否显示此菜单 默认false
      title: '初步审核', //二级-菜单标题
      icon: 'el-icon-menu', //二级-菜单图标 className
      parentTitle: "审核案件管理", //一级-菜单标题
      parentCode: 2, //一级-菜单code 必须为数字格式，用来排序父级菜单顺序
      parentIcon: "el-icon-menu" //一级-菜单图标
    },
    component : () => import ('../auditingCaseManage/preliminaryAudit/preliminaryAuditMain.vue')//采用公用的
  }, {
    path : "/auditDeliberationAuditing",
    name : "auditDeliberationAuditing",
    meta : {
      title: '案件审核',
      icon: 'el-icon-menu',
      parentTitle: "审核案件管理",
      parentCode: 2, //必须为数字格式，用来排序父级菜单顺序
      parentIcon: "el-icon-menu"
    },
    component : () => import ('../auditingCaseManage/caseReview/caseReviewMain.vue')//由于业务逻辑的不同 审核审议模块采用私有的,但是  组件采用公用的
  }, {
    path : "auditingCaseManage/feedbackOpinion",
    name : "feedbackOpinion",
    meta : {
      title: '审核结案',
      icon: 'el-icon-menu',
      parentTitle: "审核案件管理",
      parentCode: 2, //必须为数字格式，用来排序父级菜单顺序
      parentIcon: "el-icon-menu"
    },
    component : () => import ('./auditClose/auditCloseMain.vue')//由于业务逻辑的不同 反馈意见模块采用私有的,但是  组件采用公用的
  },
];
