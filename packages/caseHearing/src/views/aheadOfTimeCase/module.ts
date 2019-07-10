export default[
    {
    path : "/aheadOfTimeCase/firstTrialM",
    name : "firstTrialM_aheadOfTimeCase",
    meta : {
      title: '受理情况',
      icon: 'el-icon-menu',
      parentTitle: "提前介入管理",
      parentCode: 2, //必须为数字格式，用来排序父级菜单顺序
      parentIcon: "el-icon-menu"
    },
    component : () => import ('../aheadOfTimeCase/caseAccept/caseAcceptMain.vue')//由于业务逻辑的不同 审核审议模块采用私有的,但是  组件采用公用的
  },
   {  
    path : "/aheadOfTimeCase/auditDeliberation",
    name : "auditDeliberation_aheadOfTimeCase",
    meta : {
      title: '审核审议',
      icon: 'el-icon-menu',
      parentTitle: "提前介入管理",
      parentCode: 2, //必须为数字格式，用来排序父级菜单顺序
      parentIcon: "el-icon-menu"
    },
    component : () => import ('./caseTrial/caseTrialMain.vue')//由于业务逻辑的不同 审核审议模块采用私有的,但是  组件采用公用的
  }
   , {
    path : "/aheadOfTimeCase/feedbackIdea",
    name : "feedbackIdea",
    meta : {
      title: '案件执行',
      icon: 'el-icon-menu',
      parentTitle: "提前介入管理",
      parentCode: 2, //必须为数字格式，用来排序父级菜单顺序
      parentIcon: "el-icon-menu"
    },
    component : () => import ('./feedbackOpinion/feedbackOpinionMain.vue')//由于业务逻辑的不同 审核审议模块采用私有的,但是  组件采用公用的
  },
];
